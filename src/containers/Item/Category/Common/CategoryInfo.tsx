import { Box } from '@mui/material';
import theme from '@/styles/theme';

import IconButton from '@/components/Button/IconButton';
import Text from '@/components/Base/Text';

import EditIcon from '@mui/icons-material/Edit';

const testText =
`· 좁은 공격 범위, 매우 빠른 공격 속도, 낮은 피해량, 낮은경직치, 낮은 강인도 감쇄력[1], 높은 치명 공격력[2]을 가졌다. 리치가 극단적으로 짧기 때문인지 평타 공격시 전진거리가 상당히 긴편이다.

· 경직 유발이 힘든 편이니 퀵스텝이나 사냥개의 스텝을 적극적으로 활용하며 치고 빠지는 전투 방식이 추천된다.

· 단검은 보통 보조무기로 쓰이고 있다. 요구 능력치와 무게가 낮아서 부담 없이 들고 다닐 수 있고, 일부 단검의 전투 기술과 치명타 공격력은 다른 무기보다 우수하다. 특히 치명타 공격력의 위력만큼은 그 강력하다는 특대검이나 특대형 무기의 그것을 뛰어넘는 위력을 보여준다.
주무기로서의 평가는 일부 고성능 전기를 가진 무기들을 제외하면 다크 소울의 단검보다 좋지 않다. 다크 소울에서 단검 전투는 평타보단 패링과 뒤잡기로 치명타를 우겨넣는 스타일이었다. 그러나 엘든 링에서는 적들이 패링 불가능한 공격을 많이 하고 뒤를 잡기도 어려워서 단검의 쓰임새도 덩달아 줄어들었다. 빠른 공격속도 때문에 상태이상 특화 무기로 연구되었으나 단검보단 자검과 쌍날검, 도, 곡검, 채찍에 바르는 게 더 효율적이다. 특히 최강의 출혈 상태이상 무기로 칭송받는 무기는 단검도 아니고 시체 뒤지는 자의 곡검과 산적의 곡도이다. 단검의 공격속도가 빠른 편이긴 하지만 사정거리가 너무 짧고 기본 대미지도 높지 않아서 상태이상만 보고 사용하기엔 리스크가 크다. 단검으로 은신 - 뒤잡기 암살 플레이를 하는 용도로 추천되기도 하는데 다른 무기로도 암살 플레이가 충분히 가능하며, 단검은 첫 되잡기 공격 이후엔 불리해지는 반면 다른 무기는 그렇지 않으니 처음부터 다른 무기를 사용하는 게 효율적이다. 가장 우수한 뒤잡기 무기는 단검이 아니고 특대검과 특대 망치이다. 뒤잡기로 적을 강제 다운 상태로 만들어서 강력한 후속타까지 확정적으로 날릴 수 있기 때문이다. 자주 사용되는 단검도 단검 자체 모션보단 전투기술이나 부가효과 때문에 쓰이고 있다. 친퀘디아는 짐승 기도용 촉매나 다름없고, 레두비아, 사명의 칼날, 검은 칼날은 전투기술로 검기를 날릴 수 있어서 근접 유저들이 보조무기로 사용한다.
만약에 주무기로 쓰고 싶다면 빠른 공격속도를 이용해 평타를 쓰는게 좋다.

· 엘든링에서 걸 수 있는 인챈트 주문은 모든 스텟 80기준으로 루사트의 지팡이로 사용하는 마력의 무기가 가장 강력하기 때문에 상질변질을 하고 마력인챈트를 걸면 공격력이 800이 넘게 나올때도 있다. 인챈트빨을 가장 잘맞는 무기군인 셈이다. 인챈트를 안쓸거면 강공격 위주의 플레이도 괜찮다. 아무리 단검이 그로기가 낮아도 차지강공은 특대형무기로 가하는 차지강공의 절반 정도의 그로기 수치는 가지고 있기 때문에 강공으로 그로기를 먹이고 치명공격을 먹이는 식으로 쓸 수 있다.
주 무기로 활용한다면 방패나 다른 무기와 조합하지 않고 쌍수로 사용하는 것이 추천된다. 단검의 사정거리와 모션은 다른 무기들과 매우 이질적이고, 다른 무기라면 상당히 비효율적이었을 모션을 갖고 있다.[3] 단검 쌍수 사용시 점프/대쉬 공격은 평범한 성능의 2히트 공격 모션이지만, 지상 공격의 경우 1타가 왼손-왼손-오른손으로 재빠르게 3히트를 넣는 모션이라 꽤 우수한 편이다. 왼손 타격 비중이 높기 때문에 왼손 단검부터 강화하는 것이 좋다.
· 길이가 짧아서 마상에서 사용하기에 부적합하다. 약공격으로는 작은 적을 아예 타격하지 못하는 경우도 생길 정도.

· 추천 전회 : 사냥개의 스텝, 그레이트 카리아`

export default function CategoryInfo(
  props: {
    index: string;
    name: string;
    description: string | null;
    onClickEditButton: () => void;
  }
) {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: theme.color.background.default,
          height: 56,
          padding: '0 12px 0 16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 700,
          }}
        >
          <Text
            sx={{
              color: theme.color.primary.main,
              marginRight: '6px',
            }}
          >
            { props.index }
          </Text>
          <Text>
            { props.name }
          </Text>
        </Box>

        <EditButton
          onClick={props.onClickEditButton}
        />
      </Box>

      <Box
        sx={{
          padding: '16px 16px 24px 16px',
          borderBottom: `1px solid ${theme.color.border.default}`,
        }}
      >
        <Text
          sx={{
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
          }}
        >
          { testText }
        </Text>
      </Box>
    </>
  );
}

function EditButton(
  props: {
    onClick: () => void;
  }
) {
  return (
    <IconButton
      onClick={props.onClick}
      sx={{
        width: '40px',
        height: '40px',
        fontSize: '22px'
      }}
    >
      <EditIcon />
    </IconButton>
  );
}