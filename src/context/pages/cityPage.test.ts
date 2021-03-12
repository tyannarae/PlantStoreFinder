import { render, screen } from "@testing-library/react";
import {mapStoreIdsToIndex } from "./cityPage";

    describe("mapStoreIdsToIndex function call", () => {
      it("calling mapStoreIdsToIndex returns object of store ids and index to context", () => {
        const storeIdsObject = mapStoreIdsToIndex();
        const value = {"eas1": 0, "tgo2": 1}
        expect(storeIdsObject).toEqual(value);

      });
    });