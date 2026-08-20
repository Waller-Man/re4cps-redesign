import type { AgentNode } from '../data/agents'

export const isAgentBranch = (node: AgentNode) => node.children !== undefined

export const hasAgentInSubtree = (node: AgentNode): boolean => {
  if (node.agents?.length) return true

  return node.children?.some(hasAgentInSubtree) ?? false
}

export const sortNodesByAgentAvailability = (
  nodes: readonly AgentNode[],
): AgentNode[] =>
  nodes
    .map((node, index) => ({ node, index }))
    .sort((left, right) => {
      const leftHasAgent = hasAgentInSubtree(left.node)
      const rightHasAgent = hasAgentInSubtree(right.node)

      if (leftHasAgent !== rightHasAgent) {
        return leftHasAgent ? -1 : 1
      }

      return left.index - right.index
    })
    .map(({ node }) => node)

export const getNodesInRenderOrder = (
  nodes: readonly AgentNode[],
): AgentNode[] => {
  const sortedNodes = sortNodesByAgentAvailability(nodes)

  return [
    ...sortedNodes.filter(isAgentBranch),
    ...sortedNodes.filter((node) => !isAgentBranch(node)),
  ]
}

const findFirstAgentPathFromNodes = (
  nodes: readonly AgentNode[],
  parentPath: string,
  ancestorPaths: readonly string[],
): string[] | undefined => {
  for (const node of getNodesInRenderOrder(nodes)) {
    const nodePath = parentPath ? `${parentPath}/${node.id}` : node.id

    if (isAgentBranch(node)) {
      const path = findFirstAgentPathFromNodes(
        node.children ?? [],
        nodePath,
        [...ancestorPaths, nodePath],
      )

      if (path) return path
    } else if (node.agents?.length) {
      return [...ancestorPaths]
    }
  }

  return undefined
}

export const findFirstAgentPath = (nodes: readonly AgentNode[]): string[] =>
  findFirstAgentPathFromNodes(nodes, '', []) ?? []
