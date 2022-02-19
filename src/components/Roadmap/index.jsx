import React from "react";
import "./style.css";

export default function Roadmap() {
  return (
    <div
      className="container mb-5"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center t-shadow tittle" id="roadmap">
            Roadmap
          </h1>
          <div className="">
            <div className="card-body">
              <div id="content">
                <ul className="timeline">
                  <li className="event" data-date="Phase 1">
                    <ul>
                      <li>Solana Giveaway</li>
                      <li>Whitelist spots giveaway</li>
                      <li>Build a strong community</li>
                      <li>Getting doxxed by RugRadar</li>
                      <li>
                        Quiz, games and giveaways for our discord community
                      </li>
                      <li>Collabs and giveaways with other NFT projects</li>
                    </ul>
                  </li>
                  <li className="event" data-date="Phase 2">
                    <ul>
                      <li>999 DoodlePounds are minted</li>
                      <li>Listing on MagicEden</li>
                      <li>Listing on other secondary marketplaces</li>
                      <li>Listing on howrare.is</li>
                    </ul>
                  </li>
                  <li className="event" data-date="Post Launch">
                    <ul>
                      <li>
                        100% of royalties go to community wallet and will be
                        used for floor buybacks, buying potential blue chips,
                        donations, giving back to holders, etc. there will be a
                        voting system for the community wallet. Holders will
                        have full control over it.
                      </li>
                      <li>Donations to Dog Shelters and other NGO's.</li>
                      <li>
                        Collabs and whitelist raffles for our holders in other
                        projects.
                      </li>
                    </ul>
                    <p style={{ paddingLeft: "20px" }}>
                      <br />
                      We don't plan on overpromising and underdelivering, just
                      know that we have great things planned for our HOLDERS and
                      they will definitely be rewarded.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
