/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AddItemTextFn, AjaxFn, ClassNames, CustomAddItemText, FuseOptions, ItemFilterFn, MaxItemTextFn, NoChoicesTextFn, NoResultsTextFn, OnCreateTemplates, OnInit, SortFn, UniqueItemText, ValueCompareFunction } from "./components/interfaces";
export { AddItemTextFn, AjaxFn, ClassNames, CustomAddItemText, FuseOptions, ItemFilterFn, MaxItemTextFn, NoChoicesTextFn, NoResultsTextFn, OnCreateTemplates, OnInit, SortFn, UniqueItemText, ValueCompareFunction } from "./components/interfaces";
export namespace Components {
    interface ChoicesjsStencil {
        "addItemFilter": string | RegExp | ItemFilterFn;
        "addItemText": string | AddItemTextFn;
        "addItems": boolean;
        "ajax": (fn: AjaxFn) => Promise<this>;
        "appendValue": string;
        "callbackOnCreateTemplates": OnCreateTemplates;
        "callbackOnInit": OnInit;
        "choices": Array<any>;
        "classNames": ClassNames;
        "clearChoices": () => Promise<this>;
        "clearInput": () => Promise<this>;
        "clearStore": () => Promise<this>;
        "customAddItemText": CustomAddItemText;
        "delimiter": string;
        "disable": () => Promise<this>;
        "duplicateItemsAllowed": boolean;
        "editItems": boolean;
        "enable": () => Promise<this>;
        "fuseOptions": FuseOptions;
        "getValue": (valueOnly?: boolean) => Promise<string | Array<string>>;
        "hideDropdown": (blurInput?: boolean) => Promise<this>;
        "highlightAll": () => Promise<this>;
        "highlightItem": (item: HTMLElement, runEvent?: boolean) => Promise<this>;
        "itemSelectText": string;
        "items": Array<any>;
        "loadingText": string;
        "maxItemCount": number;
        "maxItemText": string | MaxItemTextFn;
        "name": string;
        "noChoicesText": string | NoChoicesTextFn;
        "noResultsText": string | NoResultsTextFn;
        "paste": boolean;
        "placeholder": boolean | string;
        "placeholderValue": string;
        "position": 'auto' | 'top' | 'bottom';
        "prependValue": string;
        "removeActiveItems": (excludedId?: number) => Promise<this>;
        "removeActiveItemsByValue": (value: string) => Promise<this>;
        "removeHighlightedItems": (runEvent?: boolean) => Promise<this>;
        "removeItemButton": boolean;
        "removeItems": boolean;
        "renderChoiceLimit": number;
        "renderSelectedChoices": 'always' | 'auto';
        "resetScrollPosition": boolean;
        "searchChoices": boolean;
        "searchEnabled": boolean;
        "searchFields": Array<string> | string;
        "searchFloor": number;
        "searchPlaceholderValue": string;
        "searchResultLimit": number;
        "setChoiceByValue": (value: string | Array<string>) => Promise<this>;
        "setChoices": (choices: Array<any>, value: string, label: string, replaceChoices?: boolean) => Promise<this>;
        "setValue": (args: Array<any>) => Promise<this>;
        "shouldSort": boolean;
        "shouldSortItems": boolean;
        "showDropdown": (focusInput?: boolean) => Promise<this>;
        "silent": boolean;
        "sorter": SortFn;
        "type"?: 'single' | 'multiple' | 'text';
        "unhighlightAll": () => Promise<this>;
        "unhighlightItem": (item: HTMLElement) => Promise<this>;
        "uniqueItemText": UniqueItemText;
        "value": string;
        "valueComparer": ValueCompareFunction;
    }
}
declare global {
    interface HTMLChoicesjsStencilElement extends Components.ChoicesjsStencil, HTMLStencilElement {
    }
    var HTMLChoicesjsStencilElement: {
        prototype: HTMLChoicesjsStencilElement;
        new (): HTMLChoicesjsStencilElement;
    };
    interface HTMLElementTagNameMap {
        "choicesjs-stencil": HTMLChoicesjsStencilElement;
    }
}
declare namespace LocalJSX {
    interface ChoicesjsStencil {
        "addItemFilter"?: string | RegExp | ItemFilterFn;
        "addItemText"?: string | AddItemTextFn;
        "addItems"?: boolean;
        "appendValue"?: string;
        "callbackOnCreateTemplates"?: OnCreateTemplates;
        "callbackOnInit"?: OnInit;
        "choices"?: Array<any>;
        "classNames"?: ClassNames;
        "customAddItemText"?: CustomAddItemText;
        "delimiter"?: string;
        "duplicateItemsAllowed"?: boolean;
        "editItems"?: boolean;
        "fuseOptions"?: FuseOptions;
        "itemSelectText"?: string;
        "items"?: Array<any>;
        "loadingText"?: string;
        "maxItemCount"?: number;
        "maxItemText"?: string | MaxItemTextFn;
        "name"?: string;
        "noChoicesText"?: string | NoChoicesTextFn;
        "noResultsText"?: string | NoResultsTextFn;
        "paste"?: boolean;
        "placeholder"?: boolean | string;
        "placeholderValue"?: string;
        "position"?: 'auto' | 'top' | 'bottom';
        "prependValue"?: string;
        "removeItemButton"?: boolean;
        "removeItems"?: boolean;
        "renderChoiceLimit"?: number;
        "renderSelectedChoices"?: 'always' | 'auto';
        "resetScrollPosition"?: boolean;
        "searchChoices"?: boolean;
        "searchEnabled"?: boolean;
        "searchFields"?: Array<string> | string;
        "searchFloor"?: number;
        "searchPlaceholderValue"?: string;
        "searchResultLimit"?: number;
        "shouldSort"?: boolean;
        "shouldSortItems"?: boolean;
        "silent"?: boolean;
        "sorter"?: SortFn;
        "type"?: 'single' | 'multiple' | 'text';
        "uniqueItemText"?: UniqueItemText;
        "value"?: string;
        "valueComparer"?: ValueCompareFunction;
    }
    interface IntrinsicElements {
        "choicesjs-stencil": ChoicesjsStencil;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "choicesjs-stencil": LocalJSX.ChoicesjsStencil & JSXBase.HTMLAttributes<HTMLChoicesjsStencilElement>;
        }
    }
}
