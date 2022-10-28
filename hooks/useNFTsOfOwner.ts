import { gql, useQuery } from '@apollo/client'

export const useNFTsOfOwner = ({ address }: { address: String }) => {
  const { loading, error, data } = useQuery(
    gql`
      query getOwner($address: String!) {
        tokens(where: { ownerId: $address }) {
          id
          ownerId
          tokenId
          image
          metadata
          image
          kind
          seed
        }
      }
    `,
    {
      variables: { address: address?.toLowerCase() },
    },
  )
  
  console.log(error)
  console.log(data)
  const nfts = data?.tokens || []

  return { loading, error, nfts }
}
