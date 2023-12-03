import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

const SimpleRendersCount = () => {
    const count = useRef(0);

    count.current += 1;

    return <p>Simnple Renders Count: {count.current}</p>;
};

const RendersCountWithProps = props => {
    const count = useRef(0);

    count.current += 1;

    console.log('RendersCountWithProps props', props);

    return (
        <p>
            Renders Count With Props: {count.current}, {JSON.stringify(props)}
        </p>
    );
};

const SimpleRenderCountWrappedMemo = memo(SimpleRendersCount);

const RendersCountWithPropsWrappedMemo = memo(RendersCountWithProps);

const SimpleSavePrevValue = ({ index }) => {
    const [fakePrevIndex, setFakePrevIndex] = useState();
    const [badIdeaPrevIndex, setBadIdeaPrevIndex] = useState();

    const [prevIndex, setPrevIndex] = useState(0);
    const prevIndexRef = useRef(0);

    useEffect(() => {
        setFakePrevIndex(index);

        // это плохая идея, может и будет работать, но через одно место
        setTimeout(() => setBadIdeaPrevIndex(index), 2000);

        // достаем предыдущее значение из рефа
        setPrevIndex(prevIndexRef.current);

        // сохраняем новое значение в реф, которое в следующий рендер будет уже предыдущим
        prevIndexRef.current = index;
    }, [index]);

    return (
        <p>
            previous index: {prevIndex}, current index: {index}, fakePrevIndex: {fakePrevIndex}, badIdeaPrevIndex: {badIdeaPrevIndex}
        </p>
    );
};

export const HooksExamples = () => {
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const [formState, setFormState] = useState({ username: 'somename', password: 'somepassword' });

    const exampleRef = useRef(0);

    // Эта функция будет пересоздоваться каждый рендер
    const onIncreaseHandler = () => {
        setIndex(index + 1);
    };

    // Эта функция рендерится каждый раз при изменений зависимостей, а именно secondIndex
    const onIncreaseHandlerWithUseCallback = useCallback(() => {
        setSecondIndex(secondIndex + 1);
    }, [secondIndex]);

    useEffect(() => {
        // не лучшая идея для доступа к DOM, лучше обращаться через useRef
        console.log('body', document.querySelector('body'));
        console.log('title element', titleRef);

        // В засимостях пустой массив значит будет вызван один раз во время монтирования, в 18-ом реакт в дев режиме вызывается дважды
    }, []);

    const titleRef = useRef();

    useEffect(() => {
        console.log('index useEffect["index"])', index);
    }, [index]);

    useEffect(() => {
        console.log('index useEffect[""])', index);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const indexRef = useRef();

    // сохраняем на каждый рендер значение первого индекса и используем в следующих useEffect
    useEffect(() => {
        indexRef.current = index;
    }, [index, indexRef]);

    // этот useEffect вызовется один раз
    useEffect(() => {
        console.log('indexRef.current[""]', indexRef.current);
    }, []);
    // этот useEffect будет вызываться каждый раз, когда изменяется onIncreaseHandlerWithUseCallback (изменяется счетчик secondIndex)
    useEffect(() => {
        console.log('indexRef.current["onIncreaseHandlerWithUseCallback"]', indexRef.current, onIncreaseHandlerWithUseCallback);
    }, [onIncreaseHandlerWithUseCallback]);

    // (!) так нельзя, useEffect принимает только синхронную функцию
    // useEffect(async () => {
    //     console.log("i'm async function");
    // }, []);

    useEffect(() => {
        const someAsyncFunc = async () => {
            console.log("i'm async function");
        };

        someAsyncFunc();
    }, []);

    return (
        <div>
            <h4 ref={titleRef}>Hooks</h4>
            <div>
                <h4>useState</h4>
                First Index: {index} <button onClick={onIncreaseHandler}>Increase (no useCallback)</button>
                <br />
                Seconds Index: {secondIndex} <button onClick={onIncreaseHandlerWithUseCallback}>Increase (with useCallback)</button>
                <br />
                <br />
                <br />
                {formState.toString()} {JSON.stringify(formState)} <br />
                <button onClick={() => setFormState({ username: 'Andrey' })}>Change my name to Andrey</button>
                <br />
                <button onClick={() => setFormState({ ...formState, username: 'Andrey' })}>Change my name to Andrey [2]</button>
                <br />
                Меняем стейт напрямую (это не вызовет рендер, но изменит стейт, т.к. он объект, и (!) так делать нельзя)
                <br />
                <button
                    onClick={() => {
                        formState['password2'] = '1234567';
                    }}
                >
                    Tricky Change
                </button>
            </div>
            <div>
                <h4>useRef</h4>
                {exampleRef.current}
                <button
                    onClick={() => {
                        exampleRef.current += 1;
                        console.log('example.current', exampleRef.current);
                    }}
                >
                    Change Ref
                </button>
                <SimpleSavePrevValue index={index} />
            </div>
            <h4>Counts</h4>
            <SimpleRendersCount />
            <RendersCountWithProps onIncreaseHandler={onIncreaseHandler} />
            <b>Wrapped into memo components</b>
            <SimpleRenderCountWrappedMemo />
            <RendersCountWithPropsWrappedMemo onIncreaseHandler={onIncreaseHandlerWithUseCallback} />
        </div>
    );
};
