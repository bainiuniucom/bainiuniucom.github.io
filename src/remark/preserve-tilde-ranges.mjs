const textFrom = (node) => {
  if (typeof node.value === 'string') return node.value;
  return Array.isArray(node.children) ? node.children.map(textFrom).join('') : '';
};

export default function preserveTildeRanges() {
  return (tree) => {
    const visit = (node) => {
      if (!Array.isArray(node.children)) return;
      node.children = node.children.map((child) => {
        if (child.type === 'delete') {
          return { type: 'text', value: `～${textFrom(child)}～` };
        }
        visit(child);
        return child;
      });
    };
    visit(tree);
  };
}
