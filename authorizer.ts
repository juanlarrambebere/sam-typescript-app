import { APIGatewayAuthorizerResult, APIGatewayTokenAuthorizerEvent } from 'aws-lambda';

// This should be retrieved from an env var.
const ALLOWED_AUTH_TOKEN = 'the-secure-token';

export const handler = async (event: APIGatewayTokenAuthorizerEvent): Promise<APIGatewayAuthorizerResult> => {
  const authToken = event.authorizationToken;

  if (!authToken || authToken !== ALLOWED_AUTH_TOKEN) {
    throw new Error('Unauthorized');
  }

  return {
    principalId: 'user',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: event.methodArn,
        },
      ],
    },
  };
};
