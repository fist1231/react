import React from "react";
import { mount } from "enzyme";
import SolicitationsTable from "../src/components/solicitations/SolicitationTable";

const solcitiations = [ {"_id":"5accf4b8e3b132da65c9f4f6","SOLICITATION_ID":"DEE9FD68A6FC2B49B2C885EF62D089B4","SOLICITATION_NUMBER":"TEST111",
"PUBLICATION_APPROVAL":0,"FISCAL_YEAR":2015,"OMNIBUS_NUMBER":"","TITLE":"test",
"REVIEW_DATE":"2018-04-10T17:30:32.990Z","SELECTION_DATE":"2018-04-10T17:30:32.990Z",
"RELEASE_DATE":"2015-01-01T00:00:01.000Z","CLOSE_DATE":"2016-01-01T23:59:59.000Z",
"ANNOUNCEMENT_TYPE":"NRA","CONTAINER_TYPE":"STANDALONE","AUTHORIZED_BY":"","WITHDRAWAL_REASON":"",
"WITHDRAWAL_DATE":"2018-04-10T17:30:32.990Z","WITHDRAWN_BY":""}
]

describe("SolicitationsTable", () => {
  var props;
  var mountedSolicitationsTable;
  const solicitationsTable = () => {
    if (!mountedSolicitationsTable) {
      mountedSolicitationsTable = mount(
        <SolicitationsTable {...props} />
      );
    }
    return mountedSolicitationsTable;
  }

  beforeEach(() => {
    props = {
      solicitations: solcitiations,
      onAddSolicitation: undefined,
      onEditSolicitation: undefined,
      onDeleteSolicitation: undefined,
      solicitationsFilter: undefined
    };
    mountedSolicitationsTable = undefined;
  });

  // All tests will go here
  it("always renders a div", () => {

    // expect(wrapper.prop('solicitations')).toEqual('Events — Event Radar');

    const divs = solicitationsTable().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

});
