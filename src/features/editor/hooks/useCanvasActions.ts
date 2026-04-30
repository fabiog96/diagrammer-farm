import { useCallback, useEffect, useRef } from 'react';

import type { DiagramNode } from '@/shared/types';
import { useDiagramStore } from '@/stores';

const PASTE_OFFSET = 50;
let pasteCounter = 0;

export const useCanvasActions = () => {
  const removeNode = useDiagramStore((s) => s.removeNode);
  const selectedNodeId = useDiagramStore((s) => s.selectedNodeId);
  const addNode = useDiagramStore((s) => s.addNode);
  const setSelectedNode = useDiagramStore((s) => s.setSelectedNode);
  const clipboardRef = useRef<DiagramNode | null>(null);

  const isInputFocused = (event: KeyboardEvent) => {
    const target = event.target as HTMLElement;
    return target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable;
  };

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isInputFocused(event)) return;

      const metaOrCtrl = event.metaKey || event.ctrlKey;

      if (event.key === 'Delete' || event.key === 'Backspace') {
        if (selectedNodeId) {
          removeNode(selectedNodeId);
        }
        return;
      }

      if (metaOrCtrl && event.key === 'c') {
        if (!selectedNodeId) return;
        const node = useDiagramStore.getState().nodes.find((n) => n.id === selectedNodeId);
        if (node) {
          clipboardRef.current = structuredClone(node);
          pasteCounter = 0;
        }
        return;
      }

      if (metaOrCtrl && event.key === 'v') {
        if (!clipboardRef.current) return;
        event.preventDefault();

        pasteCounter++;
        const source = clipboardRef.current;
        const offset = PASTE_OFFSET * pasteCounter;
        const newId = `${source.type}-${Date.now()}-${pasteCounter}`;

        const cloned = {
          ...structuredClone(source),
          id: newId,
          position: {
            x: source.position.x + offset,
            y: source.position.y + offset,
          },
          selected: false,
        } as DiagramNode;

        addNode(cloned);
        setSelectedNode(newId);
        return;
      }
    },
    [selectedNodeId, removeNode, addNode, setSelectedNode],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};


