const { z } = require("zod")

const NewSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
})
  .strict()

const NewSchemaId = NewSchema.shape.id;
const CreateNewSchema = NewSchema.omit({ id: true })
const ModifyNewSchema = CreateNewSchema.partial()

module.exports = { NewSchema, NewSchemaId, CreateNewSchema, ModifyNewSchema };