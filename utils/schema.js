import { pgTable, serial, text, varchar, integer } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mock_interview', {
    jsonMockResp: text('json_mock_resp').notNull(),
    jobPosition: varchar('job_position').notNull(),
    jobDescription: varchar('job_description').notNull(),
    jobExperience: varchar('job_experience').notNull(),
    createdBy: varchar('created_by').notNull(),
    createdAt: varchar('created_at'),
    mockId : varchar('mock_id').notNull(),
})


export const UserAnswer = pgTable('user_answer', {
    mockid: varchar('mockid').notNull(),
    question: varchar('question').notNull(),
    userAnswer: varchar('user_answer').notNull(),
    corrAns: varchar('corr_ans').notNull(),
    rating: integer('rating').notNull(),
    feedback: varchar('feedback').notNull(),
    userEmail: varchar('user_email').notNull(),
    createdAt: varchar('created_at'),
})