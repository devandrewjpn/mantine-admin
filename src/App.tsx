import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { AppShell, MediaQuery } from '@mantine/core';
import { componentsOverride } from './theme/components';
import { Sidebar } from './components/sidebar/Sidebar';
import { CustomHeader } from './components/Header/Header';
import { colors } from './theme/colors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Teste from './pages/teste/Teste';
import { useState } from 'react';
import { ModalsProvider } from '@mantine/modals';
import { globalstyles } from './globalstyles';


function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <BrowserRouter>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <ModalsProvider labels={{ confirm: 'Confirmar', cancel: 'Cancelar' }}>
          <MantineProvider theme={{
            globalStyles: (theme) => (globalstyles),
            colorScheme,
            components: componentsOverride, colors: colors
          }} withGlobalStyles withNormalizeCSS>

            <AppShell
              layout='alt'
              padding="md"
              navbar={
                <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                  <Sidebar />
                </MediaQuery>
              }
              header={<CustomHeader />}
              styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
              })}
            >
              <div>
                <Routes>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/teste' element={<Teste />} />
                </Routes>
              </div>
            </AppShell>
          </MantineProvider>
        </ModalsProvider>
      </ColorSchemeProvider>
    </BrowserRouter>
  )
}

export default App
