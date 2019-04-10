/**
 * Created by kgrube on 9/11/2018
 */
/* eslint-disable promise/no-callback-in-promise */

require('dotenv').config({path: require('path').join(__dirname, '.env')});
const ConnectWise = require('../index');

const assert = require('assert');
const _ = require('lodash');
const should = require('should');
const mocha = require('mocha');
const {describe} = mocha;

const API_COMPANY = process.env.API_COMPANY;
const API_URL = process.env.API_URL;
const API_PUBLIC_KEY = process.env.API_PUBLIC_KEY;
const API_PRIVATE_KEY = process.env.API_PRIVATE_KEY;

const cw = new ConnectWise({
  companyId: API_COMPANY,
  companyUrl: API_URL,
  publicKey: API_PUBLIC_KEY,
  privateKey: API_PRIVATE_KEY,
});

describe('CW', () => {
  describe('instance', () => {
    it('should be an instance of CW', done => {
      assert(cw instanceof ConnectWise);
      done();
    });

    it('should have utils', done => {
      assert(cw.utils);
      done();
    });

    it('should have CompanyAPI', done => {
      assert(cw.CompanyAPI);
      done();
    });

    it('should have FinanceAPI', done => {
      assert(cw.FinanceAPI);
      done();
    });

    it('should have ProjectAPI', done => {
      assert(cw.ProjectAPI);
      done();
    });

    it('should have SalesAPI', done => {
      assert(cw.SalesAPI);
      done();
    });

    it('should have ScheduleAPI', done => {
      assert(cw.ScheduleAPI);
      done();
    });

    it('should have ServiceDeskAPI', done => {
      assert(cw.ServiceDeskAPI);
      done();
    });

    it('should have SystemAPI', done => {
      assert(cw.SystemAPI);
      done();
    });

    it('should have TimeAPI', done => {
      assert(cw.TimeAPI);
      done();
    });
  });

  describe('ServiceDeskAPI', () => {
    describe('Tickets', () => {
      it('should return a ticket object', done => {
        cw.ServiceDeskAPI.Tickets.getTickets({pageSize: 1})
          .then(([ticket]) => {
            assert(ticket.id);
            assert(ticket.dateEntered);
            return done();
          })
          .catch(err => done(err));
      });
    });
  });
});

describe('ConnectWise', () => {
  describe('class', () => {
    it('should have utils property', done => {
      assert(ConnectWise.utils);
      done();
    });
  });

  describe('utils', () => {
    it('should have Callback property', done => {
      assert(ConnectWise.utils.Callback);
      done();
    });

    it('should have Series property', done => {
      assert(ConnectWise.utils.Series);
      done();
    });
  });
});
