module.exports = {
  beforeCreate: async (event) => {
    event.params.data.slug = await strapi
      .service("plugin::content-manager.uid")
      .generateUIDField({
        contentTypeUID: "api::event.event",
        field: "slug",
        data: event.params.data,
      });
  },
  beforeUpdate: async (event) => {
    event.params.data.slug = await strapi
      .service("plugin::content-manager.uid")
      .generateUIDField({
        contentTypeUID: "api::event.event",
        field: "slug",
        data: event.params.data,
      });
  },
};
