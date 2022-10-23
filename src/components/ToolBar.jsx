import { Code, GitCommit, GitPullRequest, Settings } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { PAPER_COLOR, TEXT_COLOR } from '../common/themes';
import { ToolbarButton, ToolbarWrapper } from './ToolBar.style';
import { changeMode, toggleModal } from '../store/modules/layout';

const ToolBar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.layout.theme);
  const mode = useSelector((state) => state.layout.mode);

  const onChangeMode = (m) => {
    dispatch(changeMode(m));
  };

  const tools = [
    {
      name: 'Tree',
      icon: GitPullRequest,
      handle: () => onChangeMode('tree'),
    },
    {
      name: 'Chart',
      icon: GitCommit,
      handle: () => onChangeMode('chart'),
    },
    {
      name: 'Raw',
      icon: Code,
      handle: () => onChangeMode('raw'),
    },
    {
      name: 'Settings',
      icon: Settings,
      handle: () => dispatch(toggleModal()),
    },
  ];

  return (
    <>
      <ToolbarWrapper theme={theme}>
        {tools.map((tool) => (
          <ToolbarButton
            key={tool.name}
            theme={theme}
            active={mode === tool.name.toLowerCase()}
            data-tip
            data-for={tool.name}
            onClick={tool.handle}
          >
            <tool.icon size={14} />
          </ToolbarButton>
        ))}
      </ToolbarWrapper>
      {tools.map((tool) => (
        <ReactTooltip
          id={tool.name}
          key={tool.name}
          place="left"
          effect="solid"
          backgroundColor={PAPER_COLOR[theme]}
          textColor={TEXT_COLOR[theme]}
        >
          {tool.name}
        </ReactTooltip>
      ))}
    </>
  );
};

export default ToolBar;
