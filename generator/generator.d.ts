type Method = 'get' | 'post' | 'patch' | 'delete' | 'put'
type ResponseTypes =
  | 'application/json'
  | 'text/json'
  | 'application/xml'
  | 'text/xml'
  | 'application/x-www-form-urlencoded'

type Content = {
  [T in ResponseTypes]: {
    schema: Schema
  }
}

type RequestBody = {
  required?: boolean
  content: Content
}

type Responses = {
  200?: {
    description: string
    content: Content
  }
  204?: {
    description: string
    content: Content
  }
}

type Schema = {
  type: string
  enum?: Array<string>
  format?: string
  items?: {
    type?: string
    $ref?: string
  }
}

type Parameter = {
  name: string
  in: string
  required?: boolean
  explode?: boolean
  schema?: Schema
}

type Methods = {
  [T in Method]: Operation
}

type Operation = {
  tags?: Array<string>
  method: string
  operationId: string
  parameters: Array<Parameter>
  requestBody: {
    $ref: string
  }
  responses: Responses
}

type Components = {
  schemas: Record<string, Schema>
  requestBodies: Record<string, RequestBody>
}
