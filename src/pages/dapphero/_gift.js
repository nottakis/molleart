
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

function Gift() {
    return (
      <div>
        <header>
          <div
            data-dh-feature="customContract"
            data-dh-property-method-id="9puA"
            data-dh-property-auto-invoke="false"
            data-dh-property-contract-name="lexArtWrapper"
            data-dh-property-method-name="wrapNFT"
          >
            <section>
          <aside><section>
          <input
            type="text"
            className={clsx(styles.button)}
            placeholder="address"
            data-dh-property-method-id="9puA"
            data-dh-property-input-name="tokenAddress"
          />
          </section>
          <section>
          <input
            type="text"
            className="button button--outline button--block button--secondary"
            placeholder="uint256"
            data-dh-property-method-id="9puA"
            data-dh-property-input-name="tokenId"
          />
          </section>
          <section>
          <input
            type="text"
            className={clsx(styles.button)}
            placeholder="uint8"
            data-dh-property-method-id="9puA"
            data-dh-property-input-name="startingRoyalties"
          />
          </section>
  
          <button class="button button--block button--primary" data-dh-property-invoke="true" data-dh-property-method-id="9puA">
          wrapNFT
          </button>
          </aside></section>
          </div>
        </header>
      </div>
    )
}

export default Gift;
