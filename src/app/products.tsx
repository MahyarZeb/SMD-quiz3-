import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', name: 'Notebook', price: '$8.99' },
  { id: '2', name: 'Desk Lamp', price: '$24.99' },
  { id: '3', name: 'Water Bottle', price: '$14.99' },
  { id: '4', name: 'Backpack', price: '$39.99' },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
  },
  list: {
    gap: 12,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
  },
  productName: {
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
  },
});
