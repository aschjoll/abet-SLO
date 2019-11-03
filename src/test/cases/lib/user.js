const user_lib = require('../../../main/lib/user')
const { expect } = require('../../chai')
const sinon = require('sinon')

const sandbox = sinon.createSandbox();

describe('Lib - User', () => {

    describe('is_whitelisted', () => {

        afterEach(() => {
            sandbox.restore()
        })

        it('returns true when the id is in the table', async () => {
            // Arrange
            const User = require('../../../main/models/User')

            //User.query()
            sandbox.stub(User, "query").returns({
                // User.query().findById()
                findById: sandbox.stub().returns({
                    // An example user object
                    id: 1,
                    linkblue_username: 'egto222'
                })
            })

            // Act
            const result = await user_lib.is_whitelisted('egto222')

            // Assert
            expect(result).to.true

            //expect.fail()
        })

        it('returns false when the id is not in the table', async () => {
            // Arrange
            const User = require('../../../main/models/User')

            //User.query()
            sandbox.stub(User, "query").returns({
                // User.query().findById()
                findById: sandbox.stub().returns(null) // does not return a user object
            })

            // Act
            const result = await user_lib.is_whitelisted('egto222')

            // Assert
            expect(result).to.false
            //expect.fail()
        })
    })
})