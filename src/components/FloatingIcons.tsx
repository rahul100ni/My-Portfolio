import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, Wrench, Brain, Sparkles, Terminal, Settings, 
  Database, GitBranch, Globe, Cpu, Cloud, Search,
  Laptop, Monitor, Server, Shield
} from 'lucide-react';

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface GridCell {
  x: number;
  y: number;
  occupied: boolean;
}

const icons = [
  Code, Wrench, Brain, Sparkles, Terminal, Settings,
  Database, GitBranch, Globe, Cpu, Cloud, Search,
  Laptop, Monitor, Server, Shield
];

const GRID_SIZE = 8; // 8x8 grid
const MIN_DISTANCE = 150; // Minimum distance between icons in pixels

const FloatingIcons = () => {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const [grid, setGrid] = useState<GridCell[][]>([]);

  // Initialize grid
  useEffect(() => {
    const newGrid: GridCell[][] = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      newGrid[i] = [];
      for (let j = 0; j < GRID_SIZE; j++) {
        newGrid[i][j] = {
          x: (i * 100) / GRID_SIZE,
          y: (j * 100) / GRID_SIZE,
          occupied: false
        };
      }
    }
    setGrid(newGrid);
  }, []);

  const getAvailableCells = () => {
    const availableCells: GridCell[] = [];
    const centerExclusion = { min: 2, max: 5 }; // Exclude center area (cells 2-5)

    grid.forEach((row, i) => {
      row.forEach((cell, j) => {
        // Skip center area
        if (i >= centerExclusion.min && i <= centerExclusion.max &&
            j >= centerExclusion.min && j <= centerExclusion.max) {
          return;
        }
        if (!cell.occupied) {
          availableCells.push(cell);
        }
      });
    });

    return availableCells;
  };

  const generateNewIcons = () => {
    const numberOfIcons = 12;
    const newIcons: FloatingIcon[] = [];
    const availableCells = getAvailableCells();
    const usedCells = new Set<string>();

    for (let i = 0; i < Math.min(numberOfIcons, availableCells.length); i++) {
      // Get random available cell
      let cellIndex: number;
      let cell: GridCell;
      let attempts = 0;
      const maxAttempts = 10;

      do {
        cellIndex = Math.floor(Math.random() * availableCells.length);
        cell = availableCells[cellIndex];
        attempts++;
      } while (
        usedCells.has(`${Math.floor(cell.x)},${Math.floor(cell.y)}`) &&
        attempts < maxAttempts
      );

      if (attempts === maxAttempts) continue;

      // Add random offset within the cell to avoid grid-like appearance
      const offset = 10;
      const x = cell.x + (Math.random() * offset - offset/2);
      const y = cell.y + (Math.random() * offset - offset/2);

      usedCells.add(`${Math.floor(cell.x)},${Math.floor(cell.y)}`);

      // Ensure unique icon selection
      const availableIcons = icons.filter(icon => 
        !newIcons.some(existing => existing.Icon === icon)
      );
      const Icon = availableIcons[Math.floor(Math.random() * availableIcons.length)];

      newIcons.push({
        id: Math.random(),
        Icon,
        x,
        y,
        size: Math.random() * 20 + 60, // Size between 60 and 80
        delay: i * 0.1 // Stagger delay
      });
    }

    return newIcons;
  };

  useEffect(() => {
    const cycleIcons = () => {
      setIsVisible(false);
      
      setTimeout(() => {
        setFloatingIcons(generateNewIcons());
        setIsVisible(true);
      }, 1000);
    };

    setFloatingIcons(generateNewIcons());
    const interval = setInterval(cycleIcons, 5000);
    return () => clearInterval(interval);
  }, [grid]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AnimatePresence>
        {isVisible && floatingIcons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute text-violet-500/10"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              delay: icon.delay,
              duration: 0.5
            }}
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              width: icon.size,
              height: icon.size
            }}
          >
            <icon.Icon size="100%" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingIcons;