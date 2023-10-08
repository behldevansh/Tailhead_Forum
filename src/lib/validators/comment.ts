import { z } from 'zod'


// CommentValidator is a zod schema for validating comment requests
export const CommentValidator = z.object({
  postId: z.string(),
  text: z.string(),



  // replyToId is optional because it is only required when replying to a comment
  replyToId: z.string().optional()
})

export type CommentRequest = z.infer<typeof CommentValidator>
