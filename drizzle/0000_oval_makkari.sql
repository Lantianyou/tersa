--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "profile" (
	"id" text PRIMARY KEY NOT NULL,
	"customer_id" text,
	"subscription_id" text,
	"product_id" text,
	"onboarded_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "project" (
	"id" text PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"transcription_model" varchar NOT NULL,
	"vision_model" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp,
	"content" json,
	"user_id" varchar NOT NULL,
	"image" varchar,
	"members" text[],
	"demo_project" boolean DEFAULT false NOT NULL
);
