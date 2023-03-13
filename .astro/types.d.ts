declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodString;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"docs": {
"00-user-guide/00-introduction.mdx": {
  id: "00-user-guide/00-introduction.mdx",
  slug: "00-user-guide/00-introduction",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"00-user-guide/01-installation.mdx": {
  id: "00-user-guide/01-installation.mdx",
  slug: "00-user-guide/01-installation",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"00-user-guide/02-user-interface.mdx": {
  id: "00-user-guide/02-user-interface.mdx",
  slug: "00-user-guide/02-user-interface",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"00-user-guide/03-usage.mdx": {
  id: "00-user-guide/03-usage.mdx",
  slug: "00-user-guide/03-usage",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"00-user-guide/04-advanced-features.mdx": {
  id: "00-user-guide/04-advanced-features.mdx",
  slug: "00-user-guide/04-advanced-features",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"01-plugins/00-introduction.mdx": {
  id: "01-plugins/00-introduction.mdx",
  slug: "01-plugins/00-introduction",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"01-plugins/01-architecture.mdx": {
  id: "01-plugins/01-architecture.mdx",
  slug: "01-plugins/01-architecture",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"01-plugins/02-creating-a-plugin.mdx": {
  id: "01-plugins/02-creating-a-plugin.mdx",
  slug: "01-plugins/02-creating-a-plugin",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"01-plugins/03-plugin-api.mdx": {
  id: "01-plugins/03-plugin-api.mdx",
  slug: "01-plugins/03-plugin-api",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
"01-plugins/04-publishing-plugins.mdx": {
  id: "01-plugins/04-publishing-plugins.mdx",
  slug: "01-plugins/04-publishing-plugins",
  body: string,
  collection: "docs",
  data: any
} & { render(): Render[".mdx"] },
},

	};

	type ContentConfig = never;
}
