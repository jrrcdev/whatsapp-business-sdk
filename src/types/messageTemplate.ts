export type MessageTemplateStatus =
	| "APPROVED"
	| "IN_APPEAL"
	| "PENDING"
	| "REJECTED"
	| "PENDING_DELETION"
	| "DELETED"
	| "DISABLED"
	| "PAUSED"
	| "LIMIT_EXCEEDED"
	| "ARCHIVED";

export type MessageTemplateCategory =
	| "ACCOUNT_UPDATE"
	| "PAYMENT_UPDATE"
	| "PERSONAL_FINANCE_UPDATE"
	| "SHIPPING_UPDATE"
	| "RESERVATION_UPDATE"
	| "ISSUE_RESOLUTION"
	| "APPOINTMENT_UPDATE"
	| "TRANSPORTATION_UPDATE"
	| "TICKET_UPDATE"
	| "ALERT_UPDATE"
	| "AUTO_REPLY"
	| "TRANSACTIONAL"
	| "OTP"
	| "UTILITY"
	| "MARKETING"
	| "AUTHENTICATION";

export type MessageTemplateQualityScore = "GREEN" | "YELLOW" | "RED" | "UNKNOWN";

export type MessageTemplateFields = {
	name: string;
	language: string;
	components: any[];
	status: MessageTemplateStatus;
	category: MessageTemplateCategory;
	id: string;
};

export type MessageTemplate = {
	data: MessageTemplateFields[];
};

export type MessageTemplateFieldsQuery = (keyof MessageTemplateFields)[];

export type CreateMessageTemplatePayload = Partial<
	Omit<MessageTemplateFields, "message_template" | "id">
>;
