import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Layout } from '~Layout';
import { Providers } from '~Providers';
import { Catalog, Navigation } from '~components'

export default function App() {
  return (
    <Providers>
      <Layout>
        <Catalog />
        <StatusBar style="auto" />
      </Layout>
      <Navigation />
    </Providers>
  );
}
