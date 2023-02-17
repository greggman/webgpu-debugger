import React from 'react';
import { ReplayTexture } from '../../../../replay';
import TextureLevelViewer from '../../../components/TextureLevelViewer/TextureLevelViewer';
import { ValueObject } from '../../../components/Value/Value';

export default function TextureVis({ data }: { data: ReplayTexture }) {
    return (
        <div className="wgdb-vis">
            <ValueObject data={data} />
            <div className="wgdb-top-separator"></div>
            <TextureLevelViewer key={data.replayObjectKey} texture={data} />
        </div>
    );
}
