
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import { useGlobalState } from '../../../store/state';

function Scribe() {
  const [value, update] = useGlobalState('startingRoyalities');
    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="zSIv"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="MolScribe"
            data-dh-property-method-name="scribeNFT"
          >
            <section>
          <aside className={clsx(styles.aside)}><section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenAddress"
            data-dh-property-method-id="zSIv"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="tokenId"
            data-dh-property-method-id="zSIv"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.input)}
            placeholder="startingRoyalties"
            data-dh-property-method-id="zSIv"
            data-dh-property-input-name="startingRoyalties"
            value={value}
            onChange={e => update(e.target.value)}
          />
          </section>
  
          <button className="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="zSIv">
          scribeNFT
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Scribe;
