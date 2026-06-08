import type { INodeProperties } from 'n8n-workflow';

export const veteranConfirmationStatusDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					]
				}
			},
			"options": [
				{
					"name": "Get Veteran Status",
					"value": "Get Veteran Status",
					"action": "Get confirmation about an individual's Veteran status according to the VA",
					"description": "Get confirmation about an individual's Veteran status according to the VA",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/status"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Birth Date",
			"name": "birth_date",
			"type": "string",
			"default": "1965-01-01",
			"description": "Birth date for the person of interest in any valid ISO8601 format",
			"routing": {
				"send": {
					"property": "birth_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "First Name",
			"name": "first_name",
			"type": "string",
			"default": "John",
			"description": "First name for the person of interest",
			"routing": {
				"send": {
					"property": "first_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"displayName": "Gender",
			"name": "gender",
			"type": "options",
			"default": "M",
			"description": "Optional gender of M or F for the person of interest",
			"options": [
				{
					"name": "M",
					"value": "M"
				},
				{
					"name": "F",
					"value": "F"
				}
			],
			"routing": {
				"send": {
					"property": "gender",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Name",
			"name": "last_name",
			"type": "string",
			"default": "Doe",
			"description": "Last name for the person of interest",
			"routing": {
				"send": {
					"property": "last_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"displayName": "Middle Name",
			"name": "middle_name",
			"type": "string",
			"default": "Theodore",
			"description": "Optional middle name for the person of interest",
			"routing": {
				"send": {
					"property": "middle_name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ssn",
			"name": "ssn",
			"type": "string",
			"default": "555-55-5555",
			"description": "Social Security Number for the person of interest with or without dashes",
			"routing": {
				"send": {
					"property": "ssn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikey",
			"type": "string",
			"default": "",
			"description": "API key for apikey (header: apikey)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Veteran Confirmation Status"
					],
					"operation": [
						"Get Veteran Status"
					]
				}
			}
		},
];
