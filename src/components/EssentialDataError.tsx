import { Box } from '@mui/material';

import BoxLoading from '@/components/Loading/BoxLoading';

export default function EssentialDataErrorBoundary(
  props: {
    isLoading: boolean;
    isError: boolean;
    loadingComponent?: React.ReactNode;
  }
) {
  return (
    <>
      { props.isLoading === true &&
        <LoadingComponent
          loadingComponent={props.loadingComponent}
        />
      }

      { (props.isLoading === false && props.isError === true) &&
        <ErrorComponent />
      }
    </>
  );
}

function LoadingComponent(
  props: {
    loadingComponent?: React.ReactNode;
  }
) {
  return (
    <>
      { props.loadingComponent !== undefined ? (
        props.loadingComponent
      ) : (
        <BoxLoading />
      )}
    </>
  );
}

// TODO 적당한 디자인 / 홈으로, 새로고침
function ErrorComponent() {
  return (
    <Box>
      페이지 에러
    </Box>
  );
}