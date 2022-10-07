export default {
	name: "externalPage",
	title: "External Page",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
      validation: Rule => Rule.required()
		},
		{
			name: "url",
			title: "URL",
			type: "url",
      validation: Rule => Rule.required()
		}
	]
};
