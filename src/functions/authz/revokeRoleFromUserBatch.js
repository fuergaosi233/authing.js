import mutations from "../../graphql/mutations"
import checkOptions from "../../utils/checkOptions"

export default function (options) {
  checkOptions(options, [
    {
      name: 'userIdList',
      type: String
    },
    {
      name: 'roleId',
      type: String
    }
  ])
  return this.fetchToken.then(() => {
    return this.UserServiceGql.request({
      operationName: "revokeRBACRoleFromUserBatch",
      query: mutations.revokeRBACRoleFromUserBatch,
      variables: {
        input: options
      }
    })
  })
}