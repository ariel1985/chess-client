import "./App.css";
import Chessboard from "chessboardjsx";

const App = () => {
  return (
    <div className="flex-cente r centeredBox">
      <h1>Chess Game Board</h1>
      <Chessboard
        width={400}
        position="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
      />
    </div>
  );
};

export default App;