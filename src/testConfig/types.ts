import { queries, Queries, RenderOptions } from "@testing-library/react";
import { RenderHookOptions } from "@testing-library/react-hooks/lib/types";
import { DefaultRootState } from "react-redux";

export type CustomOptions = {
  mocks?: Partial<DefaultRootState>;
};

export type CustomRenderOptions<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement
> = RenderOptions<Q, Container> & CustomOptions;

export type CustomRenderHookOptions<T> = RenderHookOptions<T> & CustomOptions;
