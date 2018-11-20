const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon') // installed so I can use a spy to test efficiency
const bubbleSort = require('../bubbleSort')


describe('bubbleSort', ()=> {
  it('exists', ()=> {
    expect(bubbleSort).to.be.ok
  })
  it('sorts', ()=> {
    expect(bubbleSort([2,1])).to.eql([1,2])
  })
  it('works with 0', ()=> {
    expect(bubbleSort([2,0,1])).to.eql([0,1,2])
  })
  it('is efficient', ()=> {
    const spy = sinon.spy()
    bubbleSort([1,2,3,4,5], spy) 
    // the above is already sorted so we expect the spy call count to be 4.
    expect(spy.callCount).to.equal(4)
  })
})