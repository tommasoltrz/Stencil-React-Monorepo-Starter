import styles from './app.module.scss';

import { MyComponent } from 'ui-components-react';

export function App() {
  return (
    <div className={styles.app}>
      <main>
        <MyComponent
          first="a Web Component / Custom Element"
          middle={[
            'with complex prop passing and easy event binding',
            'for React',
          ]}
          last="thanks to Stencil"
        />
      </main>
    </div>
  );
}

export default App;
