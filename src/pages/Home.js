import { useState,useEffect,useRef,Fragment } from "react";
import { useDispatch,useSelector } from "react-redux";
import {
    Container,
    FilterContainer,
    ListContainerCont,
    ListContainer,
    ItemDes
} from "../components/containers";
import Input from "../components/input";
import ListItem from "../components/ListItem";
import theme from "../constants/theme";

const Home = ({ curTheme }) => {
    const state = useSelector((state) => state.tasks)
    const dispatch = useDispatch();
    
    const [ filter,setFilter ] = useState(0);
    const [ filterdList,setFilterdList ] = useState([]);

    useEffect(() => {
        console.log(state)
        if (filter == 0) {
            setFilterdList(state);
        }
        else if (filter == 1) {
            filterList(true);
        }
        else if (filter == 2) {

            filterList(false)
        }
    },[ filter,state ]);

    const checkHandler = (id) => {
        dispatch({ type: "status",id })

    };

    const removeHandler = (id) => {
        dispatch({ type: "remove",id })
    };

    const clearHandler = () => {
        dispatch({ type: "clear" })
    };

    const filterList = (active) => {
        let cur = state;
        cur = cur.filter((val,ind) => val.active === active);
        setFilterdList(cur);
    };

    return (
        <Fragment>
            <ListContainer backgroundColor={theme[ curTheme ][ 0 ]}>
                <Input
                    colorActive={theme[ curTheme ][ 2 ]}
                    textColor={theme[ curTheme ][ 4 ]}
                />
            </ListContainer>
            <ListContainerCont backgroundColor={theme[ curTheme ][ 0 ]}>
                {filterdList &&
                    filterdList.map((item) => (
                        <ListItem

                            color={theme[ curTheme ][ 4 ]}
                            colorActive={theme[ curTheme ][ 2 ]}
                            remove={removeHandler}
                            check={checkHandler}
                            key={item.id}

                            item={item}
                        />
                    ))}
                <ItemDes color={theme[ curTheme ][ 3 ]} hoverColor={theme[ curTheme ][ 4 ]}>
                    <h1 >{filterdList && filterdList.length} items</h1>
                    <h1 onClick={clearHandler}>Clear Complete</h1>
                </ItemDes>
            </ListContainerCont>
            <ListContainer backgroundColor={theme[ curTheme ][ 0 ]}>
                <FilterContainer
                    color={theme[ curTheme ][ 3 ]}
                    colorHover={theme[ curTheme ][ 4 ]}
                    active={theme.primary}
                    child={filter}
                >
                    <h1 onClick={() => setFilter(0)}>All</h1>
                    <h1 onClick={() => setFilter(1)}>Active</h1>
                    <h1 onClick={() => setFilter(2)}>Completed</h1>
                </FilterContainer>
            </ListContainer>
            <Container style={{ justifyContent: "center",height: "100%" }}>

                <p style={{ textAlign: "center",alignSelf: "center",color: `${theme[ curTheme ][ 3 ]}` }}>Drag and Drop to reorder list</p>
            </Container>
        </Fragment>
    )
}

export default Home