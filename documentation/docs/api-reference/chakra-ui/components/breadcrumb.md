---
id: breadcrumb
title: Breadcrumb
sidebar_label: Breadcrumb
swizzle: true
---

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy. `<Breadcrumb>` component was built with the Chakra UI [Breadcrumb][chakra-ui-breadcrumb] components using the [`useBreadcrumb`](/api-reference/core/hooks/useBreadcrumb.md) hook.

:::info-tip Swizzle
You can swizzle this component with the [**refine CLI**](/docs/packages/documentation/cli) to customize it.
:::

:::info Legacy Behavior (Dashboard Page)

In the earlier versions of **refine**, `<Refine>` component had accepted `DashboardPage` which could be used to add an index page to your app. With the changes in `routerProvider` API of **refine**, `DashboardPage` is deprecated. You can now define an index route yourself manually with your router package.

In earlier versions, the home icon in the `Breadcrumb` was created by the `DashboardPage`, now it is rendered if you define a an action route as `/` in any one of your resources. It will be rendered with the home icon regardless of the current route. You can also hide the home icon by setting `showHome` to `false`.

:::

## Properties

### `breadcrumbProps`

`<Breadcrumb>` component uses the Chakra UI [Breadcrumb][chakra-ui-breadcrumb] component so it can be configured with the `breadcrumbProps` property.

```tsx
import { List, Breadcrumb } from "@refinedev/chakra-ui";

export const PostList: React.FC = () => {
    return (
        <List
            // highlight-next-line
            breadcrumb={<Breadcrumb breadcrumbProps={{ separator: "-" }} />}
        >
            ...
        </List>
    );
};
```

### `showHome`

If you have a page with route `/`, it will be used as the root of the hierarchy and shown in the `Breadcrumb` with a home icon. To hide the root item, set `showHome` to `false.`

```tsx
import { List, Breadcrumb } from "@refinedev/chakra-ui";

export const PostList: React.FC = () => {
    return (
        <List
            // highlight-next-line
            breadcrumb={<Breadcrumb showHome={true} />}
        >
            ...
        </List>
    );
};
```

### `meta`

If your routes has additional parameters in their paths, you can pass the `meta` property to the `<Breadcrumb>` component to use them while creating the paths and filling the parameters in the paths. By default, existing URL parameters are used. You can use `meta` to override them or add new ones.

```tsx
import { List, Breadcrumb } from "@refinedev/chakra-ui";

export const PostList: React.FC = () => {
    return (
        <List
            // highlight-next-line
            breadcrumb={<Breadcrumb meta={{ authorId: "123" }} />}
        >
            ...
        </List>
    );
};
```

### `hideIcons`

If you don't want to show the resource icons on the breadcrumb, you can set `hideIcons` to `true`.

```tsx
import { List, Breadcrumb } from "@refinedev/chakra-ui";

export const PostList: React.FC = () => {
    return (
        <List
            // highlight-next-line
            breadcrumb={<Breadcrumb hideIcons />}
        >
            ...
        </List>
    );
};
```

## API Reference

### Properties

<PropsTable module="@refinedev/chakra-ui/Breadcrumb" />

[chakra-ui-breadcrumb]: https://chakra-ui.com/docs/components/breadcrumb/usage
