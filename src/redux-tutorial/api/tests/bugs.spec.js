import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import { addBug, loadBugs, resolveBug, getUnresolvedBugs } from "../bugs";

describe("bugsSlice", () => {
  let store;
  let fakeAxios;

  beforeEach(() => {
    store = configureStore();
    fakeAxios = new MockAdapter(axios);
  });

  const bugsSlice = () => store.getState().entities.bugs;

  const createState = () => ({ entities: { bugs: { list: [] } } });

  describe("actionCreators", () => {
    describe("loadingBugs", () => {
      describe("if the bugs exist in the cache", () => {
        it("they should not be fetched from the server again", async () => {
          fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }]);

          await store.dispatch(loadBugs());
          await store.dispatch(loadBugs());

          expect(fakeAxios.history.get.length).toBe(1);
        });
      });

      describe("if the bugs don't exist in the cache", () => {
        it("they should be fetched from the server", async () => {
          fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }]);

          await store.dispatch(loadBugs());

          expect(bugsSlice().list.length).toBe(1);
        });

        describe("loadingIndicator", () => {
          it("should return true while fetching the bugs from the server", async () => {
            fakeAxios.onGet("/bugs").reply(() => {
              expect(bugsSlice().loading).toBe(true);
              return [200, [{ id: 1 }]];
            });

            await store.dispatch(loadBugs());
          });

          it("should be false after fetching the bugs are fetched from the server", async () => {
            fakeAxios.onGet("/bugs").reply(200, [{ id: 1 }]);

            await store.dispatch(loadBugs());

            expect(bugsSlice().loading).toBe(false);
          });

          it("should be false if the server returned an error", async () => {
            fakeAxios.onGet("/bugs").reply(500);

            await store.dispatch(loadBugs());

            expect(bugsSlice().loading).toBe(false);
          });
        });
      });
    });

    it("should add the bug to store if it's saved to the server", async () => {
      const bug = { description: "A" };
      const savedBug = { ...bug, id: 1 };
      fakeAxios.onPost("/bugs").reply(200, savedBug);

      await store.dispatch(addBug(bug));

      expect(bugsSlice().list).toContainEqual(savedBug);
    });

    it("should not add the bug to store if it's not saved to the server", async () => {
      const bug = { description: "A" };
      fakeAxios.onPost("/bugs").reply(500);

      await store.dispatch(addBug(bug));

      expect(bugsSlice().list).toHaveLength(0);
    });

    it("should mark the bug as resolved if it's saved to the server", async () => {
      fakeAxios.onPost("/bugs").reply(200, { id: 1 });
      fakeAxios.onPatch("/bugs/1").reply(200, { id: 1, resolved: true });

      await store.dispatch(addBug({}));
      await store.dispatch(resolveBug(1));

      expect(bugsSlice().list[0].resolved).toBe(true);
    });

    it("should not mark the bug as resolved if it's not saved to the server", async () => {
      fakeAxios.onPost("/bugs").reply(200, { id: 1 });
      fakeAxios.onPatch("/bugs/1").reply(500);

      await store.dispatch(addBug({}));
      await store.dispatch(resolveBug(1));

      expect(bugsSlice().list[0].resolved).not.toBe(true);
    });
  });

  describe("selectors", () => {
    it("getUnresolvedBugs", () => {
      const state = createState();
      state.entities.bugs.list = [
        { id: 1, resolved: true },
        { id: 2 },
        { id: 3 },
      ];

      const result = getUnresolvedBugs(state);

      expect(result).toHaveLength(2);
    });
  });
});
