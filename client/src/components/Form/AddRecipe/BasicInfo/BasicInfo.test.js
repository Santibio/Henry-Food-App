import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { BasicInfo } from "./BasicInfo";

const inputForm = {};
const errors = {};
const handlerChange = (e) => {};
describe("<BasicInfo /> Mounted", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BasicInfo
        values={inputForm}
        errors={errors}
        handlerChange={handlerChange}
      />
    );
  });
  it('El form debe tener un input con name "name", type "text", placeholder "Name (*)" y required true', () => {
    const { container } = render(
      <BasicInfo
        values={inputForm}
        errors={errors}
        handlerChange={handlerChange}
      />
    );
    const element = container.querySelectorAll("input")[0];
    expect(element.type).toBe("text");
    expect(element.name).toBe("name");
    expect(element.placeholder).toBe("Name (*)");
    expect(element.required).toBe(true);
  });
  it('El form debe tener un input con name "summary", type "text", placeholder "Name (*)" y required true', () => {
    const { container } = render(
      <BasicInfo
      values={inputForm}
      errors={errors}
      handlerChange={handlerChange}
      />
      );
      const element = container.querySelectorAll("input")[1];
      expect(element.type).toBe("text");
      expect(element.name).toBe("summary");
      expect(element.placeholder).toBe("Summary (*)");
      expect(element.required).toBe(true);
    });
    it('El form debe tener un input con name "image", type "text" placeholder "Image URL" y required false', () => {
      const { container } = render(
        <BasicInfo
          values={inputForm}
          errors={errors}
          handlerChange={handlerChange}
        />
      );
      const element = container.querySelectorAll("input")[2];
      expect(element.type).toBe("text");
      expect(element.name).toBe("image");
      expect(element.placeholder).toBe("Image URL");
      expect(element.required).toBe(false);
    });
    it('El form debe tener un input con name "score" , type "number" placeholder "Score (0 to 100)" y required false', () => {
      const { container } = render(
        <BasicInfo
        values={inputForm}
        errors={errors}
        handlerChange={handlerChange}
        />
        );
        const element = container.querySelectorAll("input")[3];
        expect(element.type).toBe("number");
        expect(element.name).toBe("score");
        expect(element.placeholder).toBe("Score (0 to 100)");
        expect(element.required).toBe(false);
      });
      it('El form debe tener un input con name "healthScore", type "number" placeholder "Health Score (0 to 100)" y required false', () => {
        const { container } = render(
          <BasicInfo
            values={inputForm}
            errors={errors}
            handlerChange={handlerChange}
          />
        );
        const element = container.querySelectorAll("input")[4];
        expect(element.type).toBe("number");
        expect(element.name).toBe("healthScore");
        expect(element.placeholder).toBe("Health Score (0 to 100)");
        expect(element.required).toBe(false);
      });
      it('El form debe tener un input con name "readyInMinutes", type "number" placeholder "Ready In Minutes" y required false', () => {
        const { container } = render(
          <BasicInfo
            values={inputForm}
            errors={errors}
            handlerChange={handlerChange}
          />
        );
        const element = container.querySelectorAll("input")[5];
        expect(element.type).toBe("number");
        expect(element.name).toBe("readyInMinutes");
        expect(element.placeholder).toBe("Ready In Minutes");
        expect(element.required).toBe(false);
      });
});
