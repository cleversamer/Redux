import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import { addBug } from "../bugs";

describe("bugsSlice", () => {
  let store;
  let fakeAxios;

  beforeEach(() => {
    store = configureStore();
    fakeAxios = new MockAdapter(axios);
  });

  const bugsSlice = () => store.getState().entities.bugs;

  describe("actionCreators", () => {
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
  });
});
