interface Window {
    CNNBlackBox: {
        startConvolution: (options: { container: string; imageSrc: string; filter: number[] }) => void;
        startReLU: (options: { container: string; imageSrc: string; filter: number[]}) => void;
        startMaxPooling: (options: { container: string; imageSrc: string ; filter: number[]}) => void;
    };
}
