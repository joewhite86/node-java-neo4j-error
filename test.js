var java = require('java');

java.classpath.push('geronimo-jta_1.1_spec-1.1.1.jar');
java.classpath.push('neo4j-kernel-1.8.2.jar');
java.classpath.push('lucene-core-3.5.0.jar');

var GraphDatabaseFactory = java.import('org.neo4j.graphdb.factory.GraphDatabaseFactory'),
    database = new GraphDatabaseFactory().newEmbeddedDatabaseSync('graph.db'),
    tx = database.beginTxSync(),
    node = database.createNodeSync();

node.setPropertySync('name', 'Homer Simpson');
tx.successSync();
tx.finishSync();

var iterable = node.getPropertyKeysSync(),
    iterator = iterable.iteratorSync();

while(iterator.hasNextSync()) {
  var key = iterator.nextSync();
  console.log(key);
}

database.shutdownSync();