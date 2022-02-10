/*java 15 
source of this code https://github.com/Mukit09/HackerRank-Solutions/blob/master/DataStructure/CastleOnTheGrid/Solution.java
*/
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {
    private static int[] dx = {0, -1, 0, 1};
    private static int[] dy = {-1, 0, 1, 0};
    static class Point {
        int x, y;

        public Point(int x, int y) {
            this.x = x;
            this.y = y;
        }

        public int getX() {
            return x;
        }

        public int getY() {
            return y;
        }
    }

    private static boolean checkedPoint(String[] grid, int x, int y, int n) {
        if(x < 0 || x >= n || y < 0 || y >= n)
            return false;
        if(grid[x].charAt(y) == 'X')
            return false;
        return true;
    }

    private static int bfs(String[] grid, int startX, int startY, int goalX, int goalY) {
        int n = grid.length;
        boolean visit[][] = new boolean[n][n];
        int cost[][] = new int[n][n];
        Queue<Point> queue = new LinkedList<>();
        Point point = new Point(startX, startY);
        queue.offer(point);
        while(!queue.isEmpty()) {
            Point point1 = queue.poll();
            int x = point1.getX();
            int y = point1.getY();
            for(int i = 0; i<4; i++) {
                int tempX = x;
                int tempY = y;
                while(true) {
                    int newX = tempX + dx[i];
                    int newY = tempY + dy[i];
                    boolean isValid = checkedPoint(grid, newX, newY, n);
                    if(!isValid)
                        break;
                    if (!visit[newX][newY]) {
                        cost[newX][newY] = cost[x][y] + 1;
                        if (newX == goalX && newY == goalY)
                            return cost[newX][newY];
                        visit[newX][newY] = true;
                        queue.offer(new Point(newX, newY));
                    }
                    tempX = newX;
                    tempY = newY;
                }
            }
        }
        return -1;
    }
    /*
     * Complete the 'minimumMoves' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     *  1. STRING_ARRAY grid
     *  2. INTEGER startX
     *  3. INTEGER startY
     *  4. INTEGER goalX
     *  5. INTEGER goalY
     */

    public static int minimumMoves(List<String> grid, int startX, int startY, int goalX, int goalY) {
    // Write your code here
    String[] stringArray = grid.toArray(new String[0]);
int minMoves = bfs(stringArray, startX, startY, goalX, goalY);
        return minMoves;
    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<String> grid = IntStream.range(0, n).mapToObj(i -> {
            try {
                return bufferedReader.readLine();
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
        })
            .collect(toList());

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int startX = Integer.parseInt(firstMultipleInput[0]);

        int startY = Integer.parseInt(firstMultipleInput[1]);

        int goalX = Integer.parseInt(firstMultipleInput[2]);

        int goalY = Integer.parseInt(firstMultipleInput[3]);

        int result = Result.minimumMoves(grid, startX, startY, goalX, goalY);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
