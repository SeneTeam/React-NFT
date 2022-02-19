import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section
      class="accordion-section clearfix mt-3"
      aria-label="Question Accordions"
      data-aos="zoom-in"
    >
      <div class="container">
        <h1 className="text-center t-shadow tittle" id="faq">
          FAQS
        </h1>
        <div
          class="panel-group"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse0"
                  aria-expanded="true"
                  aria-controls="collapse0"
                >
                  How many DoodlePound will there be?
                </a>
              </h3>
            </div>
            <div
              id="collapse0"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading0"
            >
              <div class="panel-body px-3 mb-4">
                <p>There will be 999 DoodlePound.</p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >
                  Presale/Public mint date?
                </a>
              </h3>
            </div>
            <div
              id="collapse1"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading1"
            >
              <div class="panel-body px-3 mb-4">
                <p>17th Jan 19:00 UTC</p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse2"
                  aria-expanded="true"
                  aria-controls="collapse2"
                >
                  What is the mint price?
                </a>
              </h3>
            </div>
            <div
              id="collapse2"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading2"
            >
              <div class="panel-body px-3 mb-4">
                <p>Mint price for Whitelistt and Public will be 0.4 Solana.</p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading3">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse3"
                  aria-expanded="true"
                  aria-controls="collapse3"
                >
                  Is there a whitelist presale?
                </a>
              </h3>
            </div>
            <div
              id="collapse3"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading3"
            >
              <div class="panel-body px-3 mb-4">
                <p>
                  Yes, whitelist will have early access to the minting link.
                </p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse4"
                  aria-expanded="true"
                  aria-controls="collapse4"
                >
                  Where can we mint our own DoodlePound ?
                </a>
              </h3>
            </div>
            <div
              id="collapse4"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading2"
            >
              <div class="panel-body px-3 mb-4">
                <p>Mint link will be released at mint timee</p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse5"
                  aria-expanded="true"
                  aria-controls="collapse5"
                >
                  Which Solana Currency wallets will be usable to mint ?
                </a>
              </h3>
            </div>
            <div
              id="collapse5"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading2"
            >
              <div class="panel-body px-3 mb-4">
                <p>Phantom Wallet</p>
              </div>
            </div>
          </div>

          <div class="panel panel-default">
            <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
              <h3 class="panel-title">
                <a
                  class="collapsed"
                  role="button"
                  title=""
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href="#collapse6"
                  aria-expanded="true"
                  aria-controls="collapse6"
                >
                  Is the team Doxed ?
                </a>
              </h3>
            </div>
            <div
              id="collapse6"
              class="panel-collapse collapse"
              role="tabpanel"
              aria-labelledby="heading2"
            >
              <div class="panel-body px-3 mb-4">
                <p>We will be getting doxed by Rug Radar.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
