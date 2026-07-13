export interface ToolDefinition {
  id: string
  localeKey: string
}

// Reserved for historical RE4CPS tools that will be added in a later iteration.
export const tools: readonly ToolDefinition[] = []
