import {pgTable} from "drizzle-orm/pg-core"

export const MockInterview = pgSchema('mock_interview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('json_mock_resp').notNull(),
    jobPosition: varchar('job_position').notNull(),
    jobDescription: varchar('job_description').notNull(),
    jobExperience: varchar('job_experience').notNull(),
    createdBy: varchar('created_by').notNull(),
    createdAt: varchar('created_at'),
    mockId : integer('mock_id').notNull(),
})