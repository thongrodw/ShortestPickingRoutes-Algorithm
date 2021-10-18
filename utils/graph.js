function Graph() {
    this.vertices = [];
    this.adjacent = {};
  
    this.addVertex = function (source) {
      this.vertices.push(source);
      this.adjacent[source] = {};
    };
  
    this.addEdge = function (source, destination, distance) {
        distance = parseInt(distance)
        this.adjacent[source][destination] = distance;
        this.adjacent[destination][source] = distance;
    };
}

module.exports = {
    Graph
}