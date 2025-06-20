
const API_KEY = 'sk-dd32455d5e214dff87eb02712e84165e'; // Replace with your key
// =================================================================

const game = document.getElementById("game");
const levelText = document.getElementById("level-text");
const refresh = document.getElementById("refresh");
const fullscreen = document.getElementById("fullscreen");
const topArrow = document.getElementById("top");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const bottomArrow = document.getElementById("bottom");
const timer = document.getElementById("timer");
const titleScreenButton = document.getElementById("title-screen-button");

const player = document.createElement("div");
player.classList.add("game__player");

let level = 0;
let width = 29;
const seeb2ase = [
  ["o---e"]
  ];
const seebase = [
  ["ox---", "---xe"],
  ["ox---", "---xe", "--xxx"],
  ["o--xx", "x--xe", "--x--", "-----", "-----"],
  ["e-xx-", "x--xx", "--xo-", "-x---", "-----"],
  ["xx--e", "---xx", "--xxx", "----x", "-x-ox"],
  ["ox--e", "-x-xx", "---xx", "--xxx", "x---x"],
  ["ox--x", "-x-xe", "---x-", "x----", "x---x"],
  ["ox---", "---xe", "--xxx", "---x-", "x----"],
  ["ox--x", "-----", "x--x-", "x--e-", "x---x"],
  ["ox---", "---x-", "x----", "---xx", "xexxx"],
  ["o-x--", "--x--", "x----", "x--ex", "x--xx"],
  ["ox--x", "---x-", "--e--", "x-x--", "x---x"],
  ["---x---", "-x----e", "--x----", "x------", "o-----x"],
  ["ox----x---", "--------xe", "-----x---x"],
  [
    "xxo---x---",
    "--------x-",
    "-----x----",
    "--x-------",
    "---------e",
    "-x---x----"
  ],
  ["xollx---", "l-----xe"],
  [
    "xx----x--o",
    "------x---",
    "--------xx",
    "--x----x--",
    "---ll----e",
    "xx-xx---x-"
  ],
  [
    "xx----x--o",
    "------x---",
    "---x----xx",
    "--x----x--",
    "--x-xx----",
    "---x----xx",
    "--x-------",
    "----xlll--",
    "xx-xxlllxe"
  ],
  [
    "xx----x--o",
    "------x--x",
    "-lxlx-----",
    "-llx--x-xx",
    "-lx-------",
    "-llx----xx",
    "-lxx---x--",
    "----x-----",
    "xxe-x---x-"
  ],
  [
    "xx----x---",
    "------x--x",
    "--x-x-----",
    "x--x--x-xx",
    "l-xx------",
    "l--xlll--x",
    "l-xxlxlx--",
    "l---xe--x-",
    "xx------xo"
  ],
  [
    "xx----x---",
    "---l--x--x",
    "---l------",
    "x--x--x-x-",
    "-----x--x-",
    "--ex-x----",
    "--x-----x-",
    "----------",
    "xx-------o"
  ],
  [
    "xx----x---",
    "---l--x--x",
    "---l----l-",
    "------x-x-",
    "-----x--x-",
    "--lx-x----",
    "--x-----x-",
    "-l---xx---",
    "ex-------o"
  ],
  ["xx----xxll", "---x----lx", "-lxx-lx--o", "-x---lx---", "--elxxx--x"],
  [
    "xx----xxll",
    "ll-x----lx",
    "ll-l-xx-lx",
    "ll-l-ll-lx",
    "---x----lx",
    "-lxx-xl--o",
    "-xlllex---",
    "------x--x"
  ],
  [
    "xx----llll",
    "------exlx",
    "-l-l-xxxlx",
    "-l-l-ll-xx",
    "---x-----x",
    "-lxx-xl--o",
    "-xll-lxx--",
    "------x--x"
  ],
  [
    "xx--------",
    "--llx--xl-",
    "-x----xlx-",
    "-l---x-xx-",
    "-l-x------",
    "---x---x-x",
    "-lxx-xl--o",
    "exll-lxx--",
    "x--------x"
  ],
  ["o---s---", "--------", "---xe--s", "--------"],
  [
    "o--xxx----",
    "---xxx-x--",
    "-------e--",
    "-----x-s--",
    "---xx----x",
    "x------xxx"
  ],
  [
    "o-------s-",
    "-x-xxx-x--",
    "---------e",
    "-----x----",
    "---xx----x",
    "x------xxx"
  ],
  [
    "o---------",
    "---xxx-x--",
    "-s-s--slse",
    "-----x----",
    "---xx----x",
    "x-----xxxx"
  ],
  [
    "o---------",
    "------s-s-",
    "-s-s------",
    "-------ss-",
    "---s-ss---",
    "-s-----e--"
  ],
  [
    "o---------",
    "------s-s-",
    "-s-s------",
    "--------s-",
    "----s--s--",
    "----s---s-",
    "---s-ss---",
    "-s-----e--"
  ],
  [
    "o------e--",
    "--lll-s-s-",
    "-s-s------",
    "---llll-s-",
    "----s--s--",
    "--lls---ss",
    "---s-ssll-",
    "-s--------"
  ],
  [
    "o-xxx---x-",
    "--lll-s-s-",
    "-s-s---x--",
    "xx-llll-s-",
    "----sxxx--",
    "--lls---ss",
    "---sxxxll-",
    "-s-s---ex-"
  ],
  [
    "--xxx---x-",
    "--lll-s-s-",
    "-s-s---xll",
    "-l-llx--s-",
    "---lsxxx--",
    "--lls---ss",
    "---sxxxll-",
    "xs-s---exo"
  ],
  [
    "-s--x---x-",
    "e--ll-s-s-",
    "x--s---xll",
    "-l-l-xlll-",
    "----sxxx--",
    "-l-ls---ss",
    "--s-xxxll-",
    "xs-s----lo"
  ],
  [
    "es--l-----",
    "xxx---s---",
    "ol-ls---ss",
    "--s-xx-ll-",
    "xs-s----l-",
    "x--s---xl-",
    "-l-l-xlll-",
    "----s-----"
  ],
  ["-x-e---xxx", "-x--xlsllx", "s------x--", "-xs-xl-l--", "---------o"],
  [
    "lllls--x--",
    "sxxx-s-x--",
    "-x--slell-",
    "-x--xlx-l-",
    "s--------s",
    "-xsxxx-ls-",
    "-xs-xlxx--",
    "-xs-xlol--",
    "--slll---x"
  ],
  [
    "s-e-s-x-s-",
    "x--lx-slx-",
    "sss-ls--ss",
    "x-x-x-x-x-",
    "-sl-s-l-s-",
    "-x--llo-ss",
    "-xs-xlxx--",
    "s--s--s--s",
    "x--s--x--s"
  ],
  [
    "x-l-l-lxe-",
    "------xlx-",
    "-l--l--l--",
    "-lx-x--xx-",
    "-x--xx--l-",
    "----ll----",
    "x--x--x--l",
    "-l-l---l-l",
    "o--xl---xl"
  ],
  [
    "ss-ss-s--s",
    "o--s----s-",
    "-s--s--s--",
    "--ss--s---",
    "-s--ss--s-",
    "-------s-e",
    "s--s--s--s",
    "----s----s",
    "s--s--s--s"
  ],
  [
    "s-sss-s-ss",
    "---s--ss-s",
    "-----s-s--",
    "s-ss--s---",
    "-s--s---s-",
    "-------s--",
    "s--s--s--s",
    "-s--s-s--s",
    "s--soe----"
  ],
  [
    "s-s---s--s",
    "o--s--ss-s",
    "-s---s-s--",
    "s-ss--s---",
    "-s------s-",
    "--s-s--s--",
    "s--s--s--s",
    "-s--s-s--s",
    "s--s----e-"
  ],
  [
    "-s--sll--s",
    "---sllss-s",
    "-s---s----",
    "s-ss--s-ll",
    "-s-ll--s-l",
    "--s-s--s--",
    "sl-s--s--s",
    "-s--s-s--s",
    "s--s-eloll"
  ],
  [
    "-s-------s",
    "x--sllss-s",
    "lsllls-xx-",
    "l-ss--s-ll",
    "-sxx-----l",
    "-xxll--s--",
    "---sl-s--s",
    "--x-l-s--s",
    "--ls-xl-ll",
    "-sl--ex--o"
  ],
  [
    "os-xx------s--",
    "x--sllssxx---x",
    "lsllls-xx-s-xx",
    "l-ss--s-ll-xx-",
    "-s-l--xx---lxx",
    "-x-ll--s--xx-l",
    "-x---sl-s--ll-",
    "---xx-l-s--s-e"
  ],
  [
    "o---e-------------",
    "xxxx-xxxxxxxxxxxx-",
    "----------------x-",
    "-xxx-xxxxxxxxxx-x-",
    "------------------",
    "xxxx------------xx"
  ],
  [
    "xxxx-xxxxxxxxxxxxx",
    "e-----------------",
    "xxxx-xxxxxxxx-xxx-",
    "o-----------------",
    "xxxx-xxxxxxxx-xxx-",
    "----------------x-",
    "-xxx-xxxxxxxx-x-x-",
    "------------------",
    "xxxx------------xx",
    "xxxx-xxxxxxxx-xxxx",
    "xxxx----------xxxx"
  ],
  [
    "xxxx----------xxxx",
    "xxxx-xxxx-xxx-xxxx",
    "------------------",
    "xxxx-xxxx-xxx-xxx-",
    "o-----------------",
    "xxxx-xxxx-xxx-x-x-",
    "----------xxx-x-x-",
    "-xxx-xxxx-xxx-x-x-",
    "------------------",
    "xxxx------------xx",
    "xxxx-xxxx-xxx-xxxx",
    "e-------------xxxx",
    "xxxx------xxxxxxxx"
  ],
  [
    "xxxx----xx----xxxx",
    "xxox-xx-xx-xx-xxxx",
    "e----------xx-----",
    "xx-x-xxxxx-xx-xxx-",
    "------------------",
    "-x-x-xx-xx-xx-x-x-",
    "-----------xx-x-x-",
    "-x-x-xx-xx-xx-x-x-",
    "------------------",
    "xx--------------x-",
    "xxxx-xxxxx-xx-xxx-",
    "--------------xxx-",
    "xxxx--------------"
  ],
  [
    "xxxx----xx----xxxx",
    "xxox-xx-xx-xx-xxxx",
    "e----------xx-----",
    "-x-x-xx-xx-xx-x-x-",
    "-------------s----",
    "xx--------------x-",
    "xxxx-xxxxx-xx-xxx-",
    "--------------xxx-",
    "xxxx--------------"
  ]
];

const promptguid = `
Sliding Puzzle Game Level Design Guide

I. Level Concept
A level is a 2D puzzle grid represented as an array of strings where each character represents a cell type:
- 'o': Player start position
- 'e': Exit/end goal
- 'x': Rock (stops before)
- 'l': Lava (causes lose)
- 's': stop point (brake the move)
- '-': Empty space

II. Core Movement Mechanics
1. Player slides continuously in chosen direction until hitting an obstacle
2. Stopping occurs:
   - One cell before rocks (x)
   - On stop points (s) and exit (e)
3. Landing on lava (l) fails the level

III. Good Design Principles

1. Difficulty Balance:
   - Optimal solution: 5-15 moves
   - Obstacle density: 60-80% of grid
   - Empty space: 20-40% maximum

2. Structural Design:
   - Balanced obstacle distribution
   - Multiple potential paths
   - Clear decision points
   - Distinct zones (mazes, danger paths)

3. Strategic Element Placement:
   - Start (o): Semi-isolated area
   - Exit (e): Protected by obstacles
   - Lava (l): At path intersections
   - Stops (s): Before decision points

IV. Correct Design Examples

1. easy Difficulty (5x5):
["o--xx", "x--xe", "--x--", "-----", "-----"]

2. Medium Difficulty (6x6):
[
    "o--xxx----",
    "---xxx-x--",
    "-------e--",
    "-----x-s--",
    "---xx----x",
    "x------xxx"
  ]

3. Advanced Level (9x9):
[
    "xxxx----xx----xxxx",
    "xxox-xx-xx-xx-xxxx",
    "e----------xx-----",
    "-x-x-xx-xx-xx-x-x-",
    "-------------s----",
    "xx--------------x-",
    "xxxx-xxxxx-xx-xxx-",
    "--------------xxx-",
    "xxxx--------------"
  ]

3. Creative Stop Point Usage:
[
  "o--s---",
  "x-l--x-",
  "---s--e"
]

 4.solvable Levels:
 ${JSON.stringify(seebase)}

V. Common Design Mistakes

1. Unsolvable Levels:
 ["o-x---s-", "x--lx--x", "---s----", "-x-l-x-x", "-----s--", "x-x---xe", "--l-----", "x-------"]

2. Corner Start Points:
✓ ["o----", "-----", "----e"]
✘ ["-o---", "--x--", "---e-"]

3. Poor Obstacle Balance:
✘ ["o----", "-----", "----e"] (too easy)
✓ ["o-x--", "-x-l-", "--s-e"]

4. Infinite Loops:
✘ ["o-s--", "----s", "s---e"] (end point can't be reached because it's in the middle and the player must stand on it to win)
✓ ["o----", "-xe-s", "-----"] (Correct design with stopping mechanism)

VI. Level Testing Checklist
1. Verify single start/end point
2. Confirm solvability (possible path)
3. Test alternative routes
4. Check for infinite loops
5. Measure required moves (5-15)

VII. Advanced Design Tips
1. Use lava (l) for risky shortcuts
2. Use stops (s) to create level sections
3. Create geometric patterns (circles, mazes)
4. Introduce novel mechanics like:
   - Moving rocks
   - Temporary bridges
   - Key-door systems

VIII. Exemplary Level Design
[
    "xx----x---",
    "---l--x--x",
    "---l----l-",
    "------x-x-",
    "-----x--x-",
    "--lx-x----",
    "--x-----x-",
    "-l---xx---",
    "ex--s----o"
  ]
This level features:
- Two main paths (safe vs risky)
- Strategic stop point
- Innovative lava usage
- 6 moves minimum, 9 maximum solution
`;

const puzzles = [...seeb2ase];
let initialPosition = [];
let position = [];
let end = [];
let rocks = [];
var start = Date.now();

const buildLevel = () => {
  if (level === 0) {
    game.classList.add("game--tutorial");
  } else {
    game.classList.remove("game--tutorial");
  }
  
  if (!puzzles[level]) {
    console.error("Error: Trying to build non-existent level. Reverting to level 0.");
    level = 0;
  }
  
  document.body.style = `--cell: ${width / puzzles[level][0].length}rem`;
  game.innerHTML = "";
  rocks = [];
  
  puzzles[level].forEach((row, rowIndex) => {
    const cells = row.split("");
    cells.forEach((cell, cellIndex) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("game__cell");
      
      if (cell === "o") {
        initialPosition = [cellIndex, rowIndex];
        position = [cellIndex, rowIndex];
      } else if (cell === "x") {
        rocks.push([cellIndex, rowIndex, "rock"]);
        newDiv.classList.add("game__cell--rock");
      } else if (cell === "l") {
        rocks.push([cellIndex, rowIndex, "lava"]);
        newDiv.classList.add("game__cell--lava");
      } else if (cell === "s") {
        rocks.push([cellIndex, rowIndex, "stop"]);
        newDiv.classList.add("game__cell--stop");
      } else if (cell === "e") {
        end = [cellIndex, rowIndex];
        newDiv.classList.add("game__cell--end");
      }
      
      game.appendChild(newDiv);
    });
  });
  
  game.appendChild(player);
};

const positionPlayer = () => {
  player.style = `--positionLeft: ${position[0]}; --positionTop: ${position[1]};`;
};

const removeEvent = (e) => {
  e.preventDefault();
  e.stopPropagation();
};

async function getAIGeneratedLevel(previousLevel = null, problem = null) {
  const API_URL = `https://api.deepseek.com`;
  
let prompt = `
You are an expert level designer for a 2D puzzle game. Your task is to generate a creative, unique, and solvable level that surprises players with innovative mechanics.

LEVEL STRUCTURE:
* The level is represented as an array of strings
* Each string represents a ROW in the game grid
* Each character in a string represents a COLUMN in that row

MOVEMENT MECHANICS:
1. Player slides in chosen direction until hitting an obstacle
2. For rocks ('x'): Player stops 1 cell BEFORE the rock
3. For stops ('s') and exit ('e'): Player brakes ON the cell
4. If player stops on lava ('l'): Level is failed
5. Player slides through empty spaces ('-') without stopping

CRITICAL OUTPUT FORMAT:
 * All rows MUST have identical length.
 * Your entire response MUST be ONLY a valid JSON array of strings.
 * Do NOT include any text, explanations, or markdown like json before or after the array.
 * Each string in the array represents a row.
 * Use double quotes for all strings inside the JSON.
 * 
Example of a valid output:
[
"ox---",
"---xe"
]

CRITICAL GAME RULES (MUST FOLLOW EXACTLY):
1. Grid Dimensions:
   - Height: 5-25 rows (It must be equal.)
   - Width: 5-25 columns

2. Tile Requirements:
   - Exactly one 'o' (start)
   - Exactly one 'e' (exit)
   - Minimum 5 obstacles (mix of 'x', 'l', 's')
   - Maximum 30% empty space ('-')
   

3. Solvability:
   - Multiple solutions encouraged but not required
   - No dead-end paths without alternatives
   -There must be a wall next to the end point facing the end point, and there must be a path leading to this face to collide with it, because the condition for standing on the end point is to collide with a wall next to the end point facing the end point. 
   
${promptguid}
`;
  
  if (previousLevel && problem) {
    prompt += `
PREVIOUS LEVEL PROBLEM:
    The level you created had the following problem: ${problem}

PREVIOUS LEVEL (NEEDS FIXING):
${JSON.stringify(previousLevel)}

Please analyze the problem, fix it and then send the corrected version.
`;
  } else {
    prompt += `
Generate level ${level + 1} using these guidelines:
`;
  }
  
  try {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }],
      temperature: 1.5,
      max_tokens: 5000
      
    })
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    console.error("Error in API response:", errorData);
    return getFallbackLevel();
  }

  const data = await response.json();
  const rawText = data.choices[0].message.content;
  
  // التصحيح هنا: إزالة أي علامات JSON الزائدة
  const cleanedText = rawText.replace(/```json\n?|\n?```/g, '').trim();
  
  try {
    const newLevel = JSON.parse(cleanedText);
    if (Array.isArray(newLevel) && newLevel.every(row => typeof row === 'string' && row.length > 0)) {
      return newLevel;
    } else {
      console.error("AI response is not a valid level format (after parsing):", newLevel);
      return getFallbackLevel();
    }
  } catch (parseError) {
    console.error("Error parsing AI response:", parseError);
    console.error("Raw text received (after cleaning attempt):", cleanedText);
    return getFallbackLevel();
  }
} catch (error) {
  console.error("Error connecting to the API:", error);
  return getFallbackLevel();
}
}
function validateGeneratedLevel(levelData) {
  if (!Array.isArray(levelData)) {
    return { valid: false, problem: "Level must be an array of strings" };
  }

  if (levelData.length === 0) {
    return { valid: false, problem: "Level cannot be empty" };
  }
  
  const solvability = isLevelSolvable(levelData);
  if (!solvability.valid) {
    return solvability;
  }

  const height = levelData.length;
  if (height < 5 || height > 25) {
    return { valid: false, problem: `Invalid level height (${height} rows). Must be between 5-25` };
  }

  const width = levelData[0].length;
  if (width < 5 || width > 25) {
    return { valid: false, problem: `Invalid level width (${width} columns). Must be between 5-25` };
  }

  let oCount = 0;
  let eCount = 0;
  let startPos, endPos;

  for (let i = 0; i < height; i++) {
    const row = levelData[i];
    
    

    for (let j = 0; j < width; j++) {
      const char = row[j];
      if (!['o', 'e', 'x', 'l', 's', '-'].includes(char)) {
        return { valid: false, problem: `Invalid character '${char}' at row ${i+1}, column ${j+1}` };
      }

      if (char === 'o') {
        oCount++;
        startPos = [j, i];
      }
      if (char === 'e') {
        eCount++;
        endPos = [j, i];
      }
    }
  }

  if (oCount !== 1) {
    return { valid: false, problem: `Must have exactly one start (o), found ${oCount}` };
  }

  if (eCount !== 1) {
    return { valid: false, problem: `Must have exactly one exit (e), found ${eCount}` };
  }

  // Check if start is in corner
  

  return { valid: true };
}

function isLevelSolvable(levelData) {
  let startPos, endPos;
  const height = levelData.length;
  const width = levelData[0]?.length || 0;
  
  if (width === 0) {
    return {
      valid: false,
      problem: "Invalid level: Empty row detected"
    };
  }

  // Locate 'o' and 'e' positions
  for (let y = 0; y < height; y++) {
    const row = levelData[y];
    if (row.length !== width) {
      return {
        valid: false,
        problem: `Row ${y} has invalid length (Must be equal to the number of other rows)`
      };
    }
    
    for (let x = 0; x < width; x++) {
      const cell = row[x];
      if (cell === 'o') startPos = [x, y];
      if (cell === 'e') endPos = [x, y];
    }
  }

  // Validate start/end existence
  if (!startPos) {
    return {
      valid: false,
      problem: "Missing start position (o)"
    };
  }
  if (!endPos) {
    return {
      valid: false,
      problem: "Missing end position (e)"
    };
  }

  // Check if end is completely blocked
  const [endX, endY] = endPos;
  const directions = [[0,1],[1,0],[0,-1],[-1,0]]; // [dx, dy]
  const isEndBlocked = directions.every(([dx, dy]) => {
    const nx = endX + dx, ny = endY + dy;
    return nx < 0 || nx >= width || ny < 0 || ny >= height || 
           levelData[ny][nx] === 'x';
  });
  
  if (isEndBlocked) {
    return {
      valid: false,
      problem: `End position (${endX},${endY}) is completely blocked by rocks (x)`
    };
  }

  // BFS pathfinding with sliding mechanics
  const queue = [[...startPos, []]]; // [x, y, path]
  const visited = new Set([`${startPos[0]},${startPos[1]}`]);
  const maxSteps = width * height * 2; // Prevent infinite loops

  for (let step = 0; step < maxSteps && queue.length > 0; step++) {
    const [x, y, path] = queue.shift();

    // Reached the end?
    if (x === endX && y === endY) {
      return { 
        valid: true,
        solution: path 
      };
    }

    // Try all sliding directions
    for (const [dx, dy] of directions) {
      const [newX, newY] = simulateSlide(levelData, [x, y], [dx, dy]);
      const key = `${newX},${newY}`;
      
      if (!visited.has(key)) {
        visited.add(key);
        queue.push([newX, newY, [...path, [dx, dy]]]);
      }
    }
  }

  // Determine exact failure reason
  const reachedEnd = visited.has(`${endX},${endY}`);
  if (!reachedEnd) {
    const lavaBlock = checkLavaBlocking(levelData, startPos, endPos);
    if (lavaBlock.blocked) {
      return {
        valid: false,
        problem: `Path requires crossing lava (l) at (${lavaBlock.pos})`
      };
    }
    
    return {
      valid: false,
      problem: "No valid path from start (o) to end (e)"
    };
  }

  return {
    valid: false,
    problem: "Exceeded maximum steps (possible infinite loop)"
  };
}

function simulateSlide(levelData, [x, y], [dx, dy]) {
  const width = levelData[0].length;
  const height = levelData.length;
  let newX = x, newY = y;

  while (true) {
    newX += dx;
    newY += dy;

    // Boundary check
    if (newX < 0 || newX >= width || newY < 0 || newY >= height) {
      return [x, y];
    }

    const cell = levelData[newY][newX];

    // Obstacle checks
    if (cell === 'x') return [x, y];  // Rock (stop before)
    if (cell === 's' || cell === 'e') return [newX, newY]; // Stop/End positions
    if (cell === 'l') return [newX, newY]; // Lava (lose condition)

    x = newX;
    y = newY;
  }
}

function checkLavaBlocking(levelData, startPos, endPos) {
  return { blocked: false, pos: null };
}

function getFallbackLevel() {
  console.warn("Using fallback level due to API failure or invalid response");
  const fallbackLevels = [
    ["o-s-------", "----------", "---s-x----", "------s--e", "---x------"],
    ["o--l--x---", "x--l--l--x", "---l--l---", "x-----l--e"],
    ["o-x-s-x-e", "---s-x---", "-x---s-x-", "---x-----", "-s---x-s-"],
    ["ox--x", "-x-xe", "---x-", "x----", "x---x"],
    ["e-xx-", "x--xx", "--xo-", "-x---", "-----"]
  ];
  const combinedFallbacks = [...seebase, ...fallbackLevels];
  return combinedFallbacks[Math.floor(Math.random() * combinedFallbacks.length)];
}

const winLevel = async () => {
  game.classList.add("game--win");
  document.addEventListener("keydown", removeEvent);
  removeArrowsEvents();
  
  const isLastPredefinedLevel = level >= puzzles.length - 1;
  
  setTimeout(async () => {
    game.classList.remove("game--win");
    
    if (isLastPredefinedLevel) {
      game.classList.add("game--generating");
      await new Promise(resolve => setTimeout(resolve, 500));
      
      let newLevelData;
      let validationResult;
      let attempts = 0;
      const maxAttempts = 3;
      let previousLevel = null;
      let problem = null;
      
      do {
        newLevelData = await getAIGeneratedLevel(previousLevel, problem);
        validationResult = validateGeneratedLevel(newLevelData);
        attempts++;
        
        if (!validationResult.valid) {
          problem = validationResult.problem;
          previousLevel = newLevelData;
          console.warn(`Invalid level (attempt ${attempts}): ${problem}`);
        }
        
        if (attempts >= getAIGeneratedLevel) {
          if (!validationResult.valid) {
            console.error("Failed to generate valid level after attempts, using fallback");
            newLevelData = getFallbackLevel();
            validationResult = { valid: true };
          }
          break;
        }
      } while (!validationResult.valid);
      
      puzzles.push(newLevelData);
      game.classList.remove("game--generating");
    }
    
    localStorage.setItem("savedLevel", level + 1);
    level = level + 1;
    levelText.innerHTML = level;
    buildLevel();
    positionPlayer();
    document.removeEventListener("keydown", removeEvent);
    registerArrows();
  }, 1000);
};

const loseLevel = () => {
  game.classList.add("game--lose");
  document.addEventListener("keydown", removeEvent);
  removeArrowsEvents();
  setTimeout(() => {
    game.classList.remove("game--lose");
    position = [...initialPosition];
    positionPlayer();
    document.removeEventListener("keydown", removeEvent);
    registerArrows();
  }, 500);
};

const nextLevel = () => {
  if (position[0] === end[0] && position[1] === end[1]) {
    winLevel();
  }
};

const movePlayer = (axis, perpendicularAxis, movingForward) => {
  const relevantRocks = rocks
    .filter((rock) => rock[axis] === position[axis])
    .filter((rock) =>
      movingForward ?
      rock[perpendicularAxis] > position[perpendicularAxis] :
      rock[perpendicularAxis] < position[perpendicularAxis]
    );
    
  if (relevantRocks.length) {
    const minmax = movingForward ?
      Math.min(...relevantRocks.map((rock) => rock[perpendicularAxis])) :
      Math.max(...relevantRocks.map((rock) => rock[perpendicularAxis]));
      
    const relevantRock = relevantRocks.find(
      (rock) => rock[perpendicularAxis] === minmax
    );
    
    if (relevantRock[2] === "rock") {
      position[perpendicularAxis] = movingForward ? minmax - 1 : minmax + 1;
    } else {
      position[perpendicularAxis] = minmax;
      if (relevantRock[2] === "lava") {
        loseLevel();
      }
    }
  } else {
    const maxCells =
      axis === 1 ? puzzles[level][0].length : puzzles[level].length;
    position[perpendicularAxis] = movingForward ? maxCells - 1 : 0;
  }
  
  positionPlayer();
  nextLevel();
};

const topFunction = () => movePlayer(0, 1, false);
const leftFunction = () => movePlayer(1, 0, false);
const rightFunction = () => movePlayer(1, 0, true);
const bottomFunction = () => movePlayer(0, 1, true);

const registerArrows = () => {
  topArrow.addEventListener("click", topFunction);
  leftArrow.addEventListener("click", leftFunction);
  rightArrow.addEventListener("click", rightFunction);
  bottomArrow.addEventListener("click", bottomFunction);
};

const removeArrowsEvents = () => {
  topArrow.removeEventListener("click", topFunction);
  leftArrow.removeEventListener("click", leftFunction);
  rightArrow.removeEventListener("click", rightFunction);
  bottomArrow.removeEventListener("click", bottomFunction);
};

// Init
const savedLevel = localStorage.getItem("savedLevel");
if (savedLevel) {
  level = parseInt(savedLevel);
  levelText.innerHTML = level;
}
buildLevel();
positionPlayer();
registerArrows();

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    rightFunction();
  } else if (event.key === "ArrowLeft") {
    leftFunction();
  } else if (event.key === "ArrowDown") {
    bottomFunction();
  } else if (event.key === "ArrowUp") {
    topFunction();
  }
});

refresh.addEventListener("click", () => {
  position = [...initialPosition];
  positionPlayer();
});

fullscreen.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});

titleScreenButton.addEventListener("click", () => {
  document.getElementById("title-screen").classList.add("title-screen--hidden");
});