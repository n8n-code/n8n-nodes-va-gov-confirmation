import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { veteranConfirmationStatusDescription } from './resources/veteran-confirmation-status';

export class VaGovConfirmation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'va-gov-confirmation',
		name: 'N8nDevVaGovConfirmation',
		icon: { light: 'file:./va-gov-confirmation.png', dark: 'file:./va-gov-confirmation.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Veteran Confirmation API allows you to confirm Veteran status for a given person. This can be useful for offering Veterans discounts or other benefits',
		defaults: { name: 'va-gov-confirmation' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevVaGovConfirmationApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Veteran Confirmation Status",
					"value": "Veteran Confirmation Status",
					"description": "Veteran Confirmation - Veteran Status"
				}
			],
			"default": ""
		},
		...veteranConfirmationStatusDescription
		],
	};
}
