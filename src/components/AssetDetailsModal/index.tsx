import { Asset } from '@polymeshassociation/polymesh-sdk/types';
import { useAssetDetails } from '~/hooks/polymesh/useAssetDetails';
import Modal from '../Modal';
import { AssetDetailsCard } from '../AssetDetailsCard';

interface IAssetDetailsModalProps {
  asset: string | Asset;
  toggleModal: () => void;
}
export const AssetDetailsModal: React.FC<IAssetDetailsModalProps> = ({
  asset,
  toggleModal,
}) => {
  const { assetDetails, assetDetailsLoading } = useAssetDetails(asset);

  return (
    <Modal handleClose={toggleModal} customWidth="780px" disableOverflow>
      <AssetDetailsCard
        assetDetailsLoading={assetDetailsLoading}
        assetDetails={assetDetails}
      />
    </Modal>
  );
};
