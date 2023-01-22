import React from "react";

function ColumnTrack4() {
  return (
    <div>
      <section className="track01 w-100 p-3" id="track01">
        <h1 className="title_card fw-bold">
          Top 10 Country wise Covid-19 Updates - Tiles
        </h1>

        <div className="row" id="TopCases">
          <div className=" col-md-4 col-lg-2 col-6">
            <h4 className="subtitle_card text-blue-primary fw-bold">Top Cases</h4>
            <div className="vh-100" id="countryTopCases"></div>
          </div>
          <div
  className="card border-0 bg-tracker-pink p-3 mb-3 d-flex flex-row align-items-center justify-content-between total-case">
  <p className="mb-0 me-4 text-blue-primary fw-bold">Total Case</p>
  <span className="text-secondary letter-button-tracker"
    >totalCaseToday</span>
  <span className="fs-3 text-danger fw-bold">totalCase</span>
  </div>

          <div className="col-md-4 col-lg-2 col-6">
            <h4 className="subtitle_card text-blue-primary fw-bold">Today Cases</h4>
            <div className="vh-100" id="countryTodayCases"></div>
          </div>

          <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
            <h4 className="subtitle_card text-blue-primary fw-bold">
              Today Deaths
            </h4>
            <div className="vh-100" id="countryDeathsCases"></div>
          </div>

          <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
            <h4 className="subtitle_card text-blue-primary fw-bold">
              Today Deaths
            </h4>
            <div className="vh-100" id="countryDeathsCases2"></div>
          </div>

          <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
            <h4 className="subtitle_card text-blue-primary fw-bold">Top Active</h4>
            <div className="vh-100" id="countryActiveCases"></div>
          </div>

          <div className="col-md-4 col-lg-2 col-6" id="CountryTopCases">
            <h4 className="subtitle_card text-blue-primary fw-bold">Top Recover</h4>
            <div className="vh-100" id="countryRecoverCases"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ColumnTrack4;
